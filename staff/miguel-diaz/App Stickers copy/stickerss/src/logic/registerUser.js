import Logger from '../vendor/loggy'
import { validateString } from '../validators'
import Apium from '../vendor/Apium'

function registerUser(name, username, password, callback) {

    const logger = new Logger('registerUser')

    validateString(name, 'Name')
    validateString(username, 'Username')
    //validatePassword(password, 'Password')

    const api = new Apium ('https://b00tc4mp.herokuapp.com/api')

    api.post('/v2/users/auth', {
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify( {name, username, password})}, (error, {status, payload}) => {

            if (error) {
                callback(error)
                return
            }
            if (status === 201) {
                callback(null) 
            } 
            else if (status >= 400 && status < 500) { 
                const data = JSON.parse(payload)  
                callback(new Error(data.error)) 
            } 
            else
            callback(new Error('server error'))
        }
    )
}

export default registerUser