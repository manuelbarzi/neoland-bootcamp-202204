import { validateJwt} from '../validators'
import Apicaller from '../vendor/Apicaller'

function updateUserPassword(token, password, newPassword, newPasswordRepeat, callback) {

    validateJwt(token)
    //validatePassword(password)
    //validatePassword(newPassword, 'new password')
    //validatePassword(newPasswordRepeat, 'new password repeat')


    if (password === newPassword)
        throw new Error('current password and new password are the same')

    if (newPassword !== newPasswordRepeat) 
        throw new Error('new password and new password repeat are not the same')


    const api = new Apicaller('https://b00tc4mp.herokuapp.com/api')

    api.patch('/v2/users', {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
        body: JSON.stringify({ oldPassword: password, password: newPassword })}, (error, {status, payload}) => {

            if (error) {
                return callback(error)
            }
            else if (status >= 400 && status < 500) { 
                const data = JSON.parse(payload)
                callback(new Error(data.error)) 
            } 
            else if (status >= 500){
                callback(new Error('server error'))
            }
            if (status === 204) 
                callback(null)
        }
    )
}

export default updateUserPassword