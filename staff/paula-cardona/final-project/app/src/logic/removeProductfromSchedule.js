
import { validateJwt, validateString, validateStringNotEmptyNoSpaces } from '../validators'
import Apium from '../vendor/Apium'

function removeProductfromSchedule(token, day, productId) {

    validateJwt(token)
    validateString(day, 'day')
    validateStringNotEmptyNoSpaces(productId, 'product id')

    const api = new Apium(process.env.REACT_APP_API_URL)

    return (async () => {
        const result = await api.patch(`schedule/remove`, 
        {headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
        body: JSON.stringify({ day, productId })})
        
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

export default removeProductfromSchedule