import Logger from "../vendor/loggy"
import Apium from "../vendor/Apium"
import { validateJwt } from "../validators"
import { validateUserName } from "../validators"

function updateUserName (token, name, callback)  {

    const logger = new Logger ('authenticateUser')

    logger.info('call')

    validateJwt(token)
    validateUserName(name, 'new Name')

    const api = new Apium('https://b00tc4mp.herokuapp.com/api')

    logger.info('request')

    api.patch('v2/users', {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
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

export default updateUserName