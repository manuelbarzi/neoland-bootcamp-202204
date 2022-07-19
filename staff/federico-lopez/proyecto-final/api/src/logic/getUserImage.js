const { NotFoundError } = require("errors")
const { User } = require("../models")
const { validateObjectId } = require("../validators")

module.exports = async (userId, outputStream) => {
    validateObjectId(userId)
    debugger
    
    const user = await User.findById(userId)

    if(!user) throw new NotFoundError(`user with id ${userId} not found`)

    if(!user.profileImage) throw new NotFoundError(`user with id ${userId} has not profile image`) //VER!!!

    const admin = require("firebase-admin")

    const bucket = admin.storage().bucket()

    const readStream = bucket.file(user.profileImage).createReadStream()

    readStream.pipe(outputStream)
}