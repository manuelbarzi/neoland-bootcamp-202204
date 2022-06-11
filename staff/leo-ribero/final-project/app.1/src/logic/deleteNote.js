import Logger from 'loggy'
import Apium from 'apium'

function deleteNote(token, noteId, callback) {
    const logger = new Logger('deleteNote')

    logger.info('call')

    // TODO validate input args

    const api = new Apium(process.env.REACT_APP_API_URL)

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