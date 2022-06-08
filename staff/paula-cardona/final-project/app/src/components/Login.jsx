import { useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import authenticateUser from '../logic/authenticateUser'
import { isJwtValid } from '../validators'

function Login (props) {
    const logger = new Logger('Login')

    logger.info('call')

    const { handleFeedback } = useContext(Context)
    

    const handleFormSubmit = event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        try{
            authenticateUser(username, password, (error, token) =>  {  //mi logica no falla porque antes hemos hecho un test para comprobarla. token lo he conseguido con el authenticate i lo guardaré en la sessionstorage
                if (error) {
                    handleFeedback({ level: 'error', message: error.message})

                    return
                }

                sessionStorage.token = token
                
                props.onUserLoggedIn()
            })
        }catch(error) { 
            handleFeedback({ level: 'error', message: error.message })
        }

    }

    const handleRegisterLinkClick = event => {
        event.preventDefault()
        props.onRegisterLinkClicked()//callback que se encarga de decirle a app que me apague login i me encienda register
    }
    
    logger.info('render')
                     //return devuelve el template que queremos pintar
    return isJwtValid(sessionStorage.token) ? <></> :
    <div className= "Login Container"> 
        <h1 className="h1"> PAN </h1>
        <form className="Container" onSubmit={handleFormSubmit}>
            <input className="Input Input--light" type="text" name="username" placeholder="username"/>
            <input className="Input Input--light" type="password" name="password" placeholder="password"/>
            <button className="Button Button--light">Login</button>
            <a href="#"onClick={handleRegisterLinkClick}>Register</a>
        </form>
    </div>
}

export default Login

