import { validateJwt} from 'validators'
import Apicaller from 'apicaller'

function deleteUser (token, password, callback)  {
    
    validateJwt(token)
    //validatePassword(password, 'Password')

    const api = new Apicaller(process.env.REACT_APP_API_URL)

    api.delete('/users', {
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





/* const xhr = new XMLHttpRequest

xhr.addEventListener('load', event => {
    const status = event.target.status
    
    if (status === 204) 
        callback(null)
    else if (status >= 400 && status < 500) { 
        const json = event.target.responseText 
        const data = JSON.parse(json)

        callback(new Error(data.error)) 
    } else {
        callback(new Error('server error'))
    }
})


xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

xhr.setRequestHeader('Authorization', `Bearer ${token}`)
xhr.setRequestHeader('Content-Type', 'application/json')

const data = { password: password }
const json = JSON.stringify(data) 

xhr.send(json) */