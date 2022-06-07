import Logger from "../vendor/Loggy"
import { validateUsername, validatePassword } from '../validators'
import Apium from '../vendor/Apium'

function registerUser(name, username, password, callback) {
    const logger = new Logger('registerUser')

    logger.info('call')

    validateUsername(username)
    validatePassword(password)

    const api = new Apium('http://localhost:8080/api')

    logger.info('request')

    api.post('users', {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, username, password })
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

export default registerUser