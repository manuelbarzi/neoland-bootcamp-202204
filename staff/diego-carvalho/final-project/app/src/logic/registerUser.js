
import Apium from 'vendor/Apium'
import {validateString, validateEmail,validatePassword} from 'validators'

export function registerUser(name, email, password, callback) {
    validateString(name, 'name')
    validateEmail(email, 'email')
    validatePassword(password)

    const api = new Apium('http://localhost:8080/api')

    api.post('users', {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    }, (error, { status, payload }) => {
       
        if (error) {
            callback(error)

            return
        }

        if (status === 201) {
            callback(null)
        } else if (status >= 400 && status < 500) {

            const data = JSON.parse(payload)

            callback(new Error(data.error))
        } else {
            callback(new Error('server error'))
        }
    })
}