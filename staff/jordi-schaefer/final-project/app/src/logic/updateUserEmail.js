import { validateEmail, validateJwt } from 'validators'
import Apicaller from 'apicaller'

function updateUserEmail (token, email, callback)  {

    validateJwt(token)
    validateEmail(email, 'email')

    const api = new Apicaller(process.env.REACT_APP_API_URL)
    
    api.patch('/users', {
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'},
        body: JSON.stringify({ email: email })}, (error, {status, payload}) => {

            if (error) {
                callback(error)
                return
            }
            if (status === 204) 
                callback(null)
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

export default updateUserEmail