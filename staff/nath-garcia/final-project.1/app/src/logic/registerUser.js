import Logger from '../vendor/Loggy'
import { validateUsername, validatePassword, validateString } from '../validators'
import Apium from '../vendor/Apium'

function registerUser(name, surname, username, email, phone, password) {

    validateString(name)
    validateString(surname)
    validateUsername(username)
    validateString(email)
    validatePassword(password, 'password')


    const logger = new Logger('RegisterUser')

    logger.info('call')

    const api = new Apium(process.env.REACT_APP_API_URL)

    logger.info('request')

    return api.post('users', {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, surname, username, email, phone, password })
    })

        .then(({ status, payload }) => {

            if (status === 201) {
                return null

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




export default registerUser