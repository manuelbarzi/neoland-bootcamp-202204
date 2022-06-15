import { validateEmail, validatePassword } from 'validators'
import Apium from 'vendor/Apium'

export function authenticateUser(email, password, callback) {
    validateEmail(email)
    validatePassword(password)

    const api = new Apium('http://localhost:8080/api')

    return api.post('users/auth', {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(({ status, payload }) => {
           
            if (status === 200) {
                const data = JSON.parse(payload)

                return data.token
            } else if (status >= 400 && status < 500) {
            
                const data = JSON.parse(payload)

                callback(new Error(data.error))
            } else {
    
                callback(new Error('server error'))
            }
        })

}