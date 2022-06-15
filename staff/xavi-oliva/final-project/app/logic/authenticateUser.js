import Logger from 'loggy'
import { validateUsername, validatePassword } from 'validators'
import Apium from 'apium'

function authenticateUser(email, password) {
    const logger = new Logger('authenticateUser')

    validateEmail(email, 'email')
    validatePassword(password)

    const api = new Apium(process.env.REACT_APP_API_URL)

    logger.info('request')

    return api.post('users/auth', {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(({ status, payload }) => {
            logger.info('response')

            if (status === 200) {
                const data = JSON.parse(payload)

                return data.token
            } else if (status >= 400 && status < 500) {
                logger.warn('response - client error status ' + status)

                const data = JSON.parse(payload)

                throw new Error(data.error)
            } else {
                logger.error('response - server error status ' + status)

                throw new Error('server error')
            }
        })
}

export default authenticateUser