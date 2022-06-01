import Apium from "../vendor/Appium"
import Logger from "../vendor/Loggy"
import { validateJwt } from "../validators"
import { validatePassword } from "../validators"
function deleteUser(token, password, callback) {
    const logger = new Logger('deleteUser')

    logger.info('call')

  
    const api = new Apium('https://b00tc4mp.herokuapp.com/api')

    logger.info('request')

    api.delete('v2/users', {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password })
    }, (error, response) => {
        if (error) return callback(error)

        logger.info('response')

        const { status, payload } = response

        if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)

            callback(new Error(data.error))
        } else if (status >= 500)
            callback(new Error('server error'))

        if (status === 204)
            callback(null)
    })
}
export default deleteUser