import Logger from "../vendor/Loggy"
import { validateJwt } from '../validators'
import Apium from '../vendor/Apium'
import Note from '../models/Note'

function retrieveNotes(token, callback) {
    const logger = new Logger('retrieveNotes')

    validateJwt(token)

    logger.info('call')

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

            let { notes = [] } = data 

            notes = notes.map(note => new Note(note.id, note.text, new Date(note.date)))

            callback(null, notes)
        }
    })
}

export default retrieveNotes