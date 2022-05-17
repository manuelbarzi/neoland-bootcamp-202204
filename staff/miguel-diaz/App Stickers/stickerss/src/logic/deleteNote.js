import Logger from "../vendor/loggy"
import Apium from "../vendor/Apium"
import { validateJwt } from "../validators"
// import validateJwt 

function deleteNote(token, noteId, callback) {

    const logger = new Logger('deleteNote')

    logger.info('call')

    // TODO validate input args

    validateJwt(token)

    const api = new Apium('https://b00tc4mp.herokuapp.com/api')

    logger.info('request')

    api.get('v2/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }, (error, response) => {
        if (error) return callback(error)

        logger.info('response')

        const { status, payload } = response

        if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)

            callback(new Error(data.error))
        } else if (status >= 500)
            callback(new Error('server error'))
        else if (status === 200) {
            const data = JSON.parse(payload)

            const { notes = [] } = data

            const index = notes.findIndex(note => note.id === noteId)

            if (index < 0)
                return callback(new Error(`note with id ${noteId} not found`))

            notes.splice(index, 1)

            logger.info('request')

            api.patch('v2/users', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ notes })
            }, (error, response) => {
                if (error) return callback(error)

                logger.info('response')

                const { status, payload } = response

                if (status >= 400 && status < 500) {
                    const data = JSON.parse(payload)
        
                    callback(new Error(data.error))
                } else if (status >= 500)
                    callback(new Error('server error'))
                else if (status === 204) {
                    callback(null)
                }
            })
        }
    })
}

export default deleteNote





// function deleteNote(username, id, callback) {
//     const userExists = db.users.some(user => user.username === username)
//     const idExists = db.notes.some(note => note.id === id)

//     if(!userExists) {
//         const error = new Error('user does not exist')

//         callback(error)
//         return
//     }
    
//     if(!idExists) {
//         const error = new Error('note does not exist')

//         callback(error)
//         return
//     }

//     const indexNoteToDelete = db.notes.findIndex(note => note.id === id)

//     db.notes.splice(indexNoteToDelete, 1)
// }









// function deleteNote(username, noteId, callback) {
//     const userExists = db.users.some(user => user.username === username)

    // if (!userExists) {
    //     callback

    //     return
    // }

    // const index = db.notes.findIndex(note => note.id === noteId)

    // if (index < 0) {
        // callback(new 

//         return
//     }
