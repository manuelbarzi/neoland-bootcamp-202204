import Logger from '../vendor/Loggy'
import { validateJwt } from '../validators'
import Apium from '../vendor/Apium'

function retrieveMovements(token) {
    validateJwt(token)

    const logger = new Logger('retrieveMovements')

    logger.info('call')

    const api = new Apium(process.env.REACT_APP_API_URL)

    logger.info('request')

    return api.get('movements', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

        .then(({ status, payload }) => {
            if (status === 200) {
                const data = JSON.parse(payload)
                data.forEach(element=> {
                    element.date = new Date(element.date)
                })
                return data
            } else if (status >= 400 && status < 500) {
                logger.warn('response - client error status ' + status)

                const data = JSON.parse(payload)

                throw new Error(data.error)
            } else {
                logger.error('response - client error status ' + status)

                throw new Error('server error')
            }
        })
}

export default retrieveMovements