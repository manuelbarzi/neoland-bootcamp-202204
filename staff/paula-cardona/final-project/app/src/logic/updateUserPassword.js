import { validateJwt, validatePassword} from '../validators'
import Apium from '../vendor/Apium'

function updateUserPassword(token, password, newPassword, newPasswordRepeat) {
    
    // Esto es una responsabilidad ( valida los parámetros de entrada [robusta])
    validateJwt(token)
    validatePassword(password, 'password')
    validatePassword(newPassword, 'newPassword')
    validatePassword(newPasswordRepeat, 'newPasswordRepeat' )

    if (password === newPassword) {
        throw new Error('La contraseña actual y la contraseña nueva son iguales')   
    }

    if (newPassword !== newPasswordRepeat) {
        throw new Error('La contraseña nueva y la repetición de contraseña nueva no coinciden')
    }

    const api = new Apium (process.env.REACT_APP_API_URL)

    return (async () => {

        const result= await api.patch(`users`,
        {headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
        body: JSON.stringify({ oldPassword: password, password: newPassword })})

        const {status, payload} = result
               
        if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)
            throw new Error(data.error)
        } else if (status >= 500){
            throw new Error('server error')
        } else if (status ===204) {

            return 
        }

    })()
}
export default updateUserPassword

