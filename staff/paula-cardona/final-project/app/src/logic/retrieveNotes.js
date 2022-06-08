import Logger from '../vendor/Loggy'
import Apium from '../vendor/Apium'
import {validateJwt} from '../validators'


function retrieveNotes(token, callback){

    validateJwt(token)

    const logger = new Logger('retrieve notes')
    logger.info('call')

    const api = new Apium(process.env.REACT_APP_API_URL)

    logger.info('request')

    api.get('notes', {
        headers: { 'Authorization': `Bearer ${token}`}
        },
        (error, {status, payload}) => {

        if(error) {
            callback (error)

            return
        }
        logger.info('response')

        if (status === 200) {

            const data = JSON.parse(payload)
            
            callback(null, data.notes)

        } else if (status>= 400 && status <500) {
            
            const data = JSON.parse(payload)
            
            callback(new Error(data.error))

        

        } else callback(new Error('server error'))

    })
}

export default retrieveNotes