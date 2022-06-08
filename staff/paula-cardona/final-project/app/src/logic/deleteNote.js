import Logger from '../vendor/Loggy'
import Apium from '../vendor/Apium'
import { validateJwt} from '../validators'


function deleteNote(token, noteId, callback) {
    
    
    validateJwt(token) //dentro del token ya esta la funcion que te lo pasa a string pasará como throw
    
    const logger = new Logger('deleteNote')

    logger.info('call')
    const api = new Apium(process.env.REACT_APP_API_URL)

    
    logger.info('request')

    
    api.delete(`/notes/${noteId}`, {
        headers: {
            'Authorization': `Bearer ${token}`,  // envio token solo si quiero hacer algo relacionado ocn un usuario (osea SIEMPRE menos login)
        }
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


export default deleteNote