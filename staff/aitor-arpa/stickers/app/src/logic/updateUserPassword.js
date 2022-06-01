import Apium from "../vendor/Appium"
import { validateJwt, validatePassword } from "../validators"
function updateUserPassword(token, password, newPassword, newPasswordRepeat, callback) {
    // Validacion de datos antes de enviarlo a la API
    validateJwt(token)
    validatePassword(password)
    validatePassword(newPassword, 'new password')
    validatePassword(newPasswordRepeat, 'new password repeat')

    if (newPassword !== newPasswordRepeat)
        throw new Error('new password and new password repeat ara not the same')


    const api = new Apium('https://b00tc4mp.herokuapp.com/api')

    api.patch('v2/users', {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ oldPassword: password , password: newPassword  }) // es lo que envio al servidor 
    }, (error, response) => {
        if (error) return callback(error)

        const { status, payload } = response

        if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)

            callback(new Error(),(data.error))

        } else if (status >= 500)
            callback(new Error('server error'))
        else if (status === 204) { // con el 204 no hay response asi que los callback no hay que poner el body 
            // payload es la response de servidor 

            callback(null) // Falta Implementar el toast de Verrificacion
        }

    })
}
export default updateUserPassword