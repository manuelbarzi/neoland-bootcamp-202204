import Logger from '../vendor/Loggy'
import { validateJwt, validatePassword} from '../validators'
import Apium from '../vendor/Apium'

function updateUserPassword(token, password, newPassword, newPasswordRepeat) {
    const logger = new Logger('updateUserPassword')

    // Esto es una responsabilidad ( valida los parámetros de entrada [robusta])
    validateJwt(token)
    validatePassword(password, 'password')
    validatePassword(newPassword, 'newPassword')
    validatePassword(newPasswordRepeat, 'newPasswordRepeat' )

    if (password === newPassword) {
        
        throw new Error('new password and new password repeat are not the same')
        
    }

    if (newPassword !== newPasswordRepeat) {
        throw new Error('new password and new password repeat are not the same')
    }

    logger.info('call')
    
    const api = new Apium (process.env.REACT_APP_API_URL)

    logger.info('request')
    return api.patch('users', {
        headers : { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'  }, 
        body: JSON.stringify({ oldPassword: password, password: newPassword })
    }) 
        .then(({ status, payload}) => {

            if (status ===204) {
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
export default updateUserPassword

