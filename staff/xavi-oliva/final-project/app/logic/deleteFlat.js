import { validateJwt, validateStringNotEmptyNoSpaces } from 'validators'
import Apium from 'apium'

export async function deleteFlat(token, flatId) {
    validateJwt(token)
    validateStringNotEmptyNoSpaces(flatId, 'flat Id')

    const api = new Apium(process.env.REACT_APP_API_URL)
    
    return (async () => {       
        const result = await api.delete(`flats/${flatId}`, {
            headers: { 'Authorization': `Bearer ${token}`}})
            
        const { status, payload } = result
        
        if (status >= 400 && status < 500) { 
            const data = JSON.parse(payload)
            throw new Error(data.error) 
        } 
        else if (status >= 500) {
            throw new Error('server error')
        }
        else if (status === 204) {
            return
        }
    })()
}