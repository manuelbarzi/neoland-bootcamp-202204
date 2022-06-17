import { validateStringNotEmptyNoSpaces, validateNumber } from 'validators'
import Apicaller from 'apicaller'


function addPointToActivity(activityId, position){
    validateStringNotEmptyNoSpaces(activityId, 'activity Id')
    validateNumber(position[0], 'latitude')
    validateNumber(position[1], 'longitude')
    if(position[2] != null) validateNumber(position[2], 'altitude')

    
    const api = new Apicaller(process.env.REACT_APP_API_URL)
    
    return (async () => {

        const result = await api.patch(`/activities/${activityId}`, 
            {headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({ lat: position[0], lng: position[1], alt: position[2] })})
             
        const { status, payload } = result
  
        if (status === 204) {
            return
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

export default addPointToActivity