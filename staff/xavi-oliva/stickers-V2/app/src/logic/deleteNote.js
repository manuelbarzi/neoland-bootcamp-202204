import Logger from '../vendor/Loggy'
import Apium from '../vendor/Apium'
import { validateJwt } from '../validators'

function deleteNote(token, noteId, callback) {
    const logger = new Logger('deleteNote')

    logger.info('call')

    validateJwt(token)

    const api = new Apium('http://localhost:8080/api')

    logger.info('request')

    api.get('notes', {
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