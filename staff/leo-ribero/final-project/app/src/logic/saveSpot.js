import Logger from 'loggy'
import Apium from 'apium'

function saveSpot(token, spotId, text, callback) {
    const logger = new Logger('saveSpot')

    logger.info('call')

    // TODO validate input args

    logger.info('request')

    const api = new Apium(process.env.REACT_APP_API_URL)

    if (!spotId)
        api.post('spots', {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        }, (error, response) => {
            if (error) return callback(error)

            logger.info('response')

            const { status, payload } = response

            if (status >= 400 && status < 500) {
                const data = JSON.parse(payload)

                callback(new Error(data.error))
            } else if (status >= 500)
                callback(new Error('server error'))
            else if (status === 201) {
                callback(null)
            }
        })
    else
        api.patch(`spots/${spotId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
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

export default saveSpot