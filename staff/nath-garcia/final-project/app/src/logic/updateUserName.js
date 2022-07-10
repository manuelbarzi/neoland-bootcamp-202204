import { validateJwt, validateStringNotEmptyOrBlank} from '../validators'
import Apium from '../vendor/Apium'

function updateUserName(token, newName) {
    validateJwt(token)
    validateStringNotEmptyOrBlank(newName, 'new name')

    const api = new Apium (process.env.REACT_APP_API_URL)

    return(async () => {

        const result = await api.patch(`users`, { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
    body: JSON.stringify({ name: newName })})

    const { status, payload } = result

    if (status >= 400 && status < 500) {
        const data = JSON.parse(payload)
        throw new Error(data.errors)
    } else if (status >= 500){
        throw new Error('server error')
    } else if (status === 204) {
        
        return
    }
    })()

}

export default updateUserName