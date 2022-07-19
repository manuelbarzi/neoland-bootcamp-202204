const { validateFile } = require("validators")
const { validateObjectId } = require("../validators")
const busboy = require('busboy')
const admin = require("firebase-admin")

module.exports = (userId, contentType, stream) => {
    validateObjectId(userId)

    return new Promise((resolve, reject) => {
        const bb = busboy({ headers: {'content-type': contentType} });
    
        bb.on('file', (name, file, info) => {
            const { filename, encoding, mimeType } = info
    
            console.log(
                `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
                filename,
                encoding,
                mimeType
            )
    
            const bucket = admin.storage().bucket()
    
            const newFilename = Date.now() + '.' + filename.split('.').pop()
    
            const firebaseFile = bucket.file(newFilename)
            debugger
    
            const firebaseStream = firebaseFile.createWriteStream({
                metadata: {
                    contentType: mimeType
                }
            })
    
            file.pipe(firebaseStream)
    
            file.on('data', (data) => {
                console.log(`File [${name}] got ${data.length} bytes`);
            }).on('close', () => {
                console.log(`File [${name}] done`);
            }).on('error', error => {
                reject(new Error('Bb failed'))
            })
    
            firebaseStream.on('finish', async () => {
                // const metadata = await firebaseFile.getMetadata()
                // const foo = await firebaseFile.getSignedUrl()
                // bucket.getfi
                // const options = {
                //     version: 'v2',
                //     action: 'read',
                //     expires: Date.now() + 1000 * 60 * 60
                // };
                // const obj = await bucket.file(newFilename).getSignedUrl(options)
                debugger
                const readStream = bucket.file(newFilename).createReadStream()

                resolve()
            }).on('error', error => {
                reject(new Error('Firebase call failed'))
            })
        })
    
        stream.pipe(bb)
    })
}