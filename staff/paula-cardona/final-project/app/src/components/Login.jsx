import { useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import authenticateUser from '../logic/authenticateUser'
import { isJwtValid } from '../validators'
import { Link, useNavigate } from 'react-router-dom'

function Login(props) {
    const logger = new Logger('Login')

    const navigate = useNavigate()
    const { handleFeedback } = useContext(Context)

    logger.info('call')


    const handleFormSubmit = event => {
        event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value;
            (async () => {
                try {
                    const token = await authenticateUser(username, password)

                    sessionStorage.token = token
                    navigate('/')
                } catch (error) {
                    handleFeedback({ level: 'error', message: error.message })
                }
            })();
    }

    logger.info('render')

    return isJwtValid(sessionStorage.token) ? <></> : <div>
        <form className="Container" onSubmit={handleFormSubmit}>
            <input className="Input Input--light" type="username" name="username" placeholder="Nombre de usuario" />
            <input className="Input Input--light" type="password" name="password" placeholder="Contraseña" />
            <button className="Button Button--light" type="submit" >Iniciar sesión</button>
            <Link className="Button Button--light" to="/register" >Registarse</Link>
        </form>
    </div>
}

export default Login