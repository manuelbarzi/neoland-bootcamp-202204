import { validateStringNotEmptyNoSpaces, validateJwt } from 'validators'
import Apicaller from 'apicaller'


function toggleLikeActivity(token, activityId){
    validateJwt(token)
    validateStringNotEmptyNoSpaces(activityId, 'activity Id')

    const api = new Apicaller(process.env.REACT_APP_API_URL)

    return (async () => {
        
        const result = await api.patch(`/activities/${activityId}/like`, 
            {headers: {'Authorization' : `Bearer ${token}`,'Content-Type': 'application/json'}})
             
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

export default toggleLikeActivity