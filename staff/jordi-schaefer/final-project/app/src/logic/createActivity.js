import { validateJwt, validateString, validateNumber } from 'validators'
import Apicaller from 'apicaller'


function createActivity(token, sport, position){
    validateJwt(token)
    validateString(sport, 'sport')
    validateNumber(position[0], 'latitude')
    validateNumber(position[1], 'longitude')
    if(position[2] != null) validateNumber(position[2], 'altitude')

    const api = new Apicaller(process.env.REACT_APP_API_URL)

    return (async () => {
        
        const result = await api.post('/activities', 
            {headers: {'Authorization' : `Bearer ${token}`, 'Content-Type': 'application/json'}, 
            body: JSON.stringify({ sport, lat: position[0], lng: position[1], alt: position[2] })})
             
        const { status, payload } = result
  
        if (status === 201) {
            const data = JSON.parse(payload)  
            return data 
        }
        else if (status >= 400 && status < 500) { 
            const data = JSON.parse(payload)  
            throw new Error(data.error) 
        }
        else { 
            throw new Error('server error')
        }

    })()
}

export default createActivity