import Logger from '../vendor/Loggy'
import Apium from '../vendor/Apium'
import { validateJwt} from '../validators'


function deleteNote(token, noteId, callback) {
    
    
    validateJwt(token) //dentro del token ya esta la funcion que te lo pasa a string pasará como throw
    
    const logger = new Logger('deleteNote')

    logger.info('call')
    const api = new Apium('https://b00tc4mp.herokuapp.com/api')

    
    logger.info('request')

    api.get('v2/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }, (error, response) => {
        if (error) return callback(error)

        logger.info('response')
        //const { status, payload } = response
        const status = response.status
        const payload = response.payload

        if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)

            callback(new Error(data.error))
        } else if (status >= 500)
            callback(new Error('server error'))
        else if (status === 200) {
            const data = JSON.parse(payload)

            const { notes = [] } = data

            const index = notes.findIndex(note => note.id === noteId) //guarda en nota, la propiedad id de la nota que sea igual a noteId

            if (index < 0) //ponemos el indice menor a 0 porque findindex si no encuentra la note.id te devuelve por predeterminado -1 y borraria la ultima posición
                return callback(new Error(`note with id ${noteId} not found`))

            notes.splice(index, 1)

            logger.info('request')

            api.patch('v2/users', {
                headers: {
                    'Authorization': `Bearer ${token}`,  // envio token solo si quiero hacer algo relacionado ocn un usuario (osea SIEMPRE menos login)
                    'Content-Type': 'application/json' // envio content type solo si quiero pasar informacion a la API, para recoger info NO
                },
                body: JSON.stringify({ notes })
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
    })
}
export default deleteNote