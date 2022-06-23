import { validateStringNotEmptyNoSpaces, validateString, validateJwt } from 'validators'
import Apium from 'apium'


function updateFlat(token, flatId, title, description, address, images){
    validateJwt(token)
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(flatId, 'flat id')
    if (title != null) validateString(title, 'title')
    if (description != null) validateString(description, 'description')
    if (address != null) validateString(address, 'address')
        
    const api = new Apium(process.env.REACT_APP_API_URL)

    return (async () => {      
        const result = await api.patch(`/flats/${flatId}`,
            {headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({ title, description, address, images})})
             
        const { status, payload } = result
  
        // if (status === 413){
        //     throw new Error("Images are too big")
        // }
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

export default updateFlat