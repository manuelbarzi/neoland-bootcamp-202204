import Logger from '../vendor/Loggy'
import Apium from '../vendor/Apium'
import Note from '../data/models/Note'
import {validateJwt} from '../validators'


function retrieveNotes(token, callback){

    validateJwt(token)

    const logger = new Logger('retrieve notes')
    logger.info('call')

    const api = new Apium('https://b00tc4mp.herokuapp.com/api')

    logger.info('request')

    api.get('v2/users', {
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