import Logger from '../vendor/Loggy'
import Apium from '../vendor/Apium'
import { validateJwt, validateString } from '../validators'

function deleteNote(token, noteId, callback) {
    const logger = new Logger('deleteNote')

    logger.info('call')

    validateJwt(token)
    validateString(noteId)

    const api = new Apium('http://localhost:8080/api')

    logger.info('request')

    api.delete(`notes/${noteId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
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
        else if (status === 204) {
            callback(null)
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
