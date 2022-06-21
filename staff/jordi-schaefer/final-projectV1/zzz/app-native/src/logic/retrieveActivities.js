import { validateJwt} from '../validators'
import Apicaller from '../vendor/Apicaller'

function retrieveActivities(token) {  // recuperar
    
    validateJwt(token)

    const api = new Apicaller('http://localhost:8080/api')

    return (async () => {

        const result = await api.get('/activities', {
            headers: { 'Authorization': `Bearer ${token}`}})

            const { status, payload } = result
    
            if (status === 200) {
                const data = JSON.parse(payload)
                const activities = data.activities
                return activities
            } 
            else if (status >= 400 && status < 500) { 
                const data = JSON.parse(payload)  
                throw new Error(data.error)
            } 
            else
                throw new Error('server error')
    })()
}

export default retrieveActivities