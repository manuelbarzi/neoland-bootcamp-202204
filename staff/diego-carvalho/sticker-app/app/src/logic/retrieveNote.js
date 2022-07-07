import Logger from '../vendor/Loggy'
import Apium from '../vendor/Apium'

function retrieveNote(token, callback) {
    const logger = new Logger('retrieveNote')

    logger.info('call')

    // TODO validate input args

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

            callback(null, data)
        }
    })
}

export default retrieveNote