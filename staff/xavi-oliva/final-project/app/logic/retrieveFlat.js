import { validateJwt, validateStringNotEmptyNoSpaces } from 'validators'
import Apium from 'apium'

export async function retrieveFlat(token, flatId) {
    
    validateJwt(token)
    validateStringNotEmptyNoSpaces(flatId, 'flat id')

    const api = new Apium('http://localhost:8080/api')

    const { status, payload } = await api.get(
        `flats/${flatId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })


    const data = JSON.parse(payload)
        
    if (status === 200) return data

    else if (status >= 400 && status < 500) throw new Error(data.error)

    else if (status >= 500) throw new Error('server error')
}