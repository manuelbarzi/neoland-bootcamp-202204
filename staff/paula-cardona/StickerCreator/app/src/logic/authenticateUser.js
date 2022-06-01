import Logger from '../vendor/Loggy'
import { validateUsername, validatePassword } from '../validators'
import Apium from '../vendor/Apium'

function authenticateUser(username, password, callback) { //authenticate el username no podemos traerlo porque no conocemos la manera de como encontrar un username por lo tanto no lo podemos validar, pero si pensar que sea en forma de string, a demás el username en el login es username no token
    
    validateUsername(username)
    validatePassword(password, 'password')
    
    const logger = new Logger('authenticate user')
    
    logger.info('call')

    const api = new Apium('https://b00tc4mp.herokuapp.com/api')

    logger.info('response')

    api.post('v2/users/auth', {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }, (error, { status, payload }) => {
        

        if (error) {
            callback(error)
            return
        }
        logger.info('request')

        if (status === 200) {
            
            const data = JSON.parse(payload)
            callback(null, data.token)

        } else if (status >= 400 && status < 500) {
           
            const data = JSON.parse(payload)

            callback(new Error(data.error))

        } else {
            

            callback(new Error('server error'))
        }
    })
}
export default authenticateUser