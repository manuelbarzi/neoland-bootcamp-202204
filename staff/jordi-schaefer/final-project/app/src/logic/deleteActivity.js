import { validateJwt} from 'validators'
import Apicaller from 'apicaller'

function deleteActivity(token, activityId) {

    validateJwt(token)
    
    const api = new Apicaller(process.env.REACT_APP_API_URL)
    
    return (async () => {
        
        const result = await api.delete(`/activities/${activityId}`, {
            headers: { 'Authorization': `Bearer ${token}`}})
            
        const { status, payload } = result
        
        if (status === 204) // si es 204 correcto, sin respuesta
            return
        else if (status >= 400 && status < 500) { 
            const data = JSON.parse(payload)  
            throw new Error(data.error) 
        }
        else { 
            throw new Error('server error')
        }

    })()
}

export default deleteActivity