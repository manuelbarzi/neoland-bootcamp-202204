import { validateStringNotEmptyOrBlank, validateEmail, validatePassword } from 'validators'
import Apium from 'apium'
import Logger from 'loggy'

export function registerUser(name, email, password, callback) {
    const logger = new Logger('registerUser')

    validateStringNotEmptyOrBlank(name, 'name')
    validateEmail(email, 'email')
    validatePassword(password)

    const api = new Apium('http://localhost:8080/api')

    logger.info('request')

    api.post('users', {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    }, (error, response) => {
        if (error) return callback(error)

        logger.info('response')

        const { status, payload } = response

        if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)

            callback(new Error(data.error))
        } else if (status >= 500)
            callback(new Error('server error'))
        if (status === 201)
            callback(null)
    })
}