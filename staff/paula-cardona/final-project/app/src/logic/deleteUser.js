import { validateJwt, validatePassword} from '../validators'
import Logger from '../vendor/Loggy'
import Apium from '../vendor/Apium'

function deleteUser (token, password)  {
    
    validateJwt(token)
    validatePassword(password)

    const logger = new Logger('deleteUser')
    const api = new Apium(process.env.REACT_APP_API_URL)

    return api.delete('users', {
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'},
        body: JSON.stringify({ password})
    
    }) 
        .then (({status, payload}) => {
            logger.info('response')

            if (status === 204) {
                return null
            
            } else if (status >=400 && status <500) {
                logger.warn ('response - client error status ' + status)

                const data = JSON.parse(payload)

                throw new Error(data.error)
            } else {
                logger.error('response - server error status ' + status)

                throw new Error('server error')
            }
        })
}

export default deleteUser

