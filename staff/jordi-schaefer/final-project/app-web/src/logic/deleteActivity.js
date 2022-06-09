import { validateJwt} from '../validators'
import Apicaller from '../vendor/Apicaller'

function deleteActivity(token, activityId, callback) {

    validateJwt(token)
    
    const api = new Apicaller(process.env.REACT_APP_API_URL)
    
    api.delete(`/activities/${activityId}`, {
        headers: { 'Authorization': `Bearer ${token}`}} , (error, {status, payload}) => {
            
            if (error) {
                callback(error)
                return
            }
            if (status === 204) // si es 204 correcto, sin respuesta
                callback(null)
            else if (status >= 400 && status < 500) { // 400-500 errores de cliente
                const data = JSON.parse(payload) // lo convierto de jason a JS
                callback(new Error(data.error)) // lo envio como mensaje de error
            } 
            else {
                callback(new Error('server error')) // sino sera un error de servidor
            }

        }
    )
}

export default deleteActivity