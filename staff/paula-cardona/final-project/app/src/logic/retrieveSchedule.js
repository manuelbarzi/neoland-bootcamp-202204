
import { validateJwt} from '../validators'
import Apium from '../vendor/Apium'

function retrieveSchedule(token) {

    validateJwt(token)


    const api = new Apium(process.env.REACT_APP_API_URL)

    return (async () => {
        const result = await api.get(`schedule`, {
        headers: {Authorization: `Bearer ${token}`}})
        
        const {status, payload} = result
               
        if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)
            throw new Error(data.error)
        } else if (status >= 500){
            throw new Error('server error')
        } else if (status ===200) {
            const data = JSON.parse(payload) 

            return data.schedule
        }
            
    })()
}

export default retrieveSchedule