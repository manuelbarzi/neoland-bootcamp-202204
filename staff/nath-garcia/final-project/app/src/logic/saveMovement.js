import Logger from '../vendor/Loggy'
import Apium from '../vendor/Apium'
const { validateJwt } = require('../validators')


function saveMovement(token, amount, type, category, concept, account, date, callback) {
    
    const logger = new Logger('saveMovement')
    
    logger.info('call')

    const api = new Apium(process.env.REACT_APP_API_URL)

        api.post('movements', {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount, type,  category, concept, account, date})
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
}

export default saveMovement