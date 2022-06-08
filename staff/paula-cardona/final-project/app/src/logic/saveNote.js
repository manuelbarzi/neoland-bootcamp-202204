// Qué le paso por parámetros
// En la callback que le paso por parámetros a esa callback


// primero tengo que llamar a v:get p:/users
// manejo errores de la llamada
// paso el json de la respuesta a a obj
// cojo la propiedad notes y le puseo la nota nueva
// hago otra llamada a p:/users con verbo patch
// a esta llamada solo le paso como body la note con el array con lo que había más la nueva
// manejo los errores

import Logger from '../vendor/Loggy'
import {validateJwt} from '../validators'
import Apium from '../vendor/Apium'

function saveNote(token, noteId, text, callback) {
    const logger = new Logger('saveNote')

    logger.info('call')

    validateJwt(token) // envia throw error

    logger.info('request')

    const api = new Apium(process.env.REACT_APP_API_URL) //creo una constante que sera la nueva Apium

    if (!noteId)
        api.post('notes', {
            headers: {
                Authorization: `Bearer ${token}`, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        }, (error, response) => {
            if (error) return callback(error)

            logger.info('response')

            const { status, payload } = response

            if (status >= 400 && status < 500) {
                const data = JSON.parse(payload)

                callback(new Error(data.error))
            } else if (status >= 500)
                callback(new Error('server error'))
            else if (status === 201) {
                callback(null)
            }
        })
    else 
        api.patch(`notes/${noteId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        }, (error, response) => {
            if (error) return callback(error) // lo enviamos por callback

            logger.info('response')

            const { status, payload } = response

            if (status >= 400 && status < 500) {
                const data = JSON.parse(payload) //convierte de jason a JS

                callback(new Error(data.error)) // para pasarle el error
            } else if (status >= 500)
                callback(new Error('server error'))
            else if (status === 204) { //todo ok pero no devuelve nada
                callback(null)
            }
        })
}

export default saveNote