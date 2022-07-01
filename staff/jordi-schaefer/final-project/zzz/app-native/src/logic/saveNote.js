import { validateJwt} from '../validators'
import Apicaller from '../vendor/Apicaller'


function saveNote(token, noteId, text, callback){

    validateJwt(token)

    const api= new Apicaller(process.env.REACT_APP_API_URL)

    if (!noteId)
        api.post('/notes', 
        {headers: {'Authorization' : `Bearer ${token}`, 'Content-Type': 'application/json'}, 
        body: JSON.stringify({ text })}, (error, {status, payload}) =>{ //payload=todo lo que hay guardado en la api
            
            if (error) {
                callback (error)
                return
            }
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
        api.patch(`/notes/${noteId}`,
        {headers : {'Authorization' : `Bearer ${token}`, 'Content-Type': 'application/json'}, body: JSON.stringify({text})}, 
        (error, {status, payload}) => { 
            if (error) {  // si hay un error definido
                callback(error) // lo enviamos por callback
                return
            }
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

export default saveNote