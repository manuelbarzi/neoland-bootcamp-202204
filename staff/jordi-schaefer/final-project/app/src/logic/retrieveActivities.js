import { validateJwt} from 'validators'
import Apicaller from 'apicaller'

function retrieveActivities(token, callback) {  // recuperar
    validateJwt(token)

    const api = new Apicaller(process.env.REACT_APP_API_URL)

    api.get('/activities', {
        headers: { 'Authorization': `Bearer ${token}`}}, (error, {status, payload}) => {

            if (error) {
                callback(error)
                return
            }
            if (status === 200) {
                const data = JSON.parse(payload)
                const activities = data.activities
                callback(null, activities)
            } 
            else if (status >= 400 && status < 500) { 
                const data = JSON.parse(payload)
                callback(new Error(data.error)) 
            } 
            else {
                callback(new Error('server error'))
            }
        }
    )
}

export default retrieveActivities