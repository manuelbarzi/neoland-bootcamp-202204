import { validateString} from 'validators'
import Apicaller from 'apicaller'

function authenticateUser(username, password, callback) {

    validateString(username, 'Username')
    //validatePassword(password, 'Password')

    const api = new Apicaller(process.env.REACT_APP_API_URL)

    api.post('/users/auth', {
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify( {username, password})}, (error, {status, payload}) => {

            if (error) {
                callback(error)
                return
            }
            if (status === 200) {// 200 todo ok
                const data = JSON.parse(payload)  // los paso a objeto
                callback(null, data.token) // y envio el token por la callback
            } 
            else if (status >= 400 && status < 500) { // 400-500 errores de cliente
                const data = JSON.parse(payload) // lo convierto de jason a string   
                callback(new Error(data.error)) // lo envio como mensaje de error   
            } 
            else
            callback(new Error('server error')) // sino sera un error de servidor
        }
    )
}

export default authenticateUser


//si encuentras esto la contraseña es homer simpson 

/*
    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', event => {

        const status = event.target.status

        if (status === 200) {// 200 todo ok
            const json = event.target.responseText // recojo los datos del evento
            const data = JSON.parse(json)  // los paso a objeto
            
            callback(null, data.token) // y envio el token por la callback

        } else if (status >= 400 && status < 500) { // 400-500 errores de cliente
            const json = event.target.responseText // me guardo el texto de error
            const data = JSON.parse(json) // lo convierto de jason a string

            callback(new Error(data.error)) // lo envio como mensaje de error

        } else
        callback(new Error('server error')) // sino sera un error de servidor
    })




    // abro la api en modo get
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    // le indico que le envio un jason
    xhr.setRequestHeader('Content-Type', 'application/json')

    const data = { username, password } // cojo los datos que me llegan para login
    const json = JSON.stringify(data)   // lo convierto a jason

    xhr.send(json) // se los envio al xhr (el constructor que abro al principio)
*/