import Apium from "../vendor/Apium"
import { validateJwt, validatePassword} from '../validators'

export default function updateUserPassword(token, oldPassword, password, newPasswordRepeat, callback) {
    validateJwt(token)
    validatePassword(password)
    validatePassword(password, 'new password')
    validatePassword(newPasswordRepeat, 'new password repeat')

    if (password !== newPasswordRepeat) throw new Error('new password and new password repeat are not the same')

    const api = new Apium('http://localhost:8080/api')

    api.patch('users', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`  
        },
            body: JSON.stringify({ oldPassword, password })
        }, (error, response) => {
        if (error) return callback(error)
        const { status, payload } = response

        if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)
            callback(new Error(data.error))

        } else if (status >= 500)
            callback(new Error('server error'))
        else if (status === 204) 
            callback(null)
    })
}


