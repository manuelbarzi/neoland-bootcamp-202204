import Logger from '../vendor/Loggy'
import { validateJwt, validateStringNotEmptyOrBlank} from '../validators'
import Apium from '../vendor/Apium'


function updateProductQuantityinSchedule(token, newName) {

    validateJwt(token)
    validateStringNotEmptyOrBlank(newName, 'newName')
    

    const logger = new Logger('updateUserName')

    logger.info('call')
    const api = new Apium (process.env.REACT_APP_API_URL)

    logger.info('request')
    return api.post('users', {
        headers : { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'  }, 
        body: JSON.stringify({ name: newName })
    })
        .then (({ status, payload}) => {
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

export default updateProductQuantityinSchedule
