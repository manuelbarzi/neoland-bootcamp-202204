import Logger from '../vendor/Loggy'
import { validateJwt} from '../validators'
import Apium from '../vendor/Apium'


function updateUserName(token, newName, callback) {
    
    validateJwt(token)

    const logger = new Logger('updateUserName')


    logger.info('call')
    const api = new Apium (process.env.REACT_APP_API_URL)
    
    logger.info('request')
    api.patch('users', {
        headers : { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'  }, 
        body: JSON.stringify({ name: newName })}, //para cambiar name necesitamos la propiedad de name que sera el NEWNAME
        (error, { status, payload}) => {

            if (error) {
                callback(error)
                return
            }
            logger.info('response')

            if (status >=400 && status < 500) { 

                const data = JSON.parse(payload) //la respuesta de data de json lo convierto en objeto

                callback(new Error(data.error)) //la propiedad de error de ese data
            
            }else if (status >= 500) 
                callback(new Error('server error')) //tenemos que especificar cuando es error ya que esto estaba abajo con else para coger el resto, pero al subirlo sino incluiria el else final

            else if (status ===204) //si el status es 201 no hanrá error, esta bien porque habrá creado el registerUser
                callback(null)
    })
}

export default updateUserName
