import { validateJwt} from '../validators'
import Apium from '../vendor/Apium'

function deleteUser (token, password, callback)  {
    
    validateJwt(token)
    //validatePassword(password, 'Password')

    const api = new Apium('http://localhost:8080/api')

    api.delete('users', {
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'},
        body: JSON.stringify({ password})}, (error, {status, payload}) => {

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

export default deleteUser
