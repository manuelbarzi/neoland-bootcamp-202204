import { validateStringNotEmptyNoSpaces, validateJwt } from '../validators'
import Apium from '../vendor/Apium'

function toggleLikeProject(token, projectId){
    validateJwt(token)
    validateStringNotEmptyNoSpaces(projectId, 'project Id')

    const api = new Apium('http://localhost:8080/api')

    return (async () => {       
        const result = await api.patch(`/project/${projectId}/like`, 
            {headers: {'Authorization' : `Bearer ${token}`,'Content-Type': 'application/json'}})
             
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

export default toggleLikeProject