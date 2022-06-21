import { useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import authenticateUser from '../logic/authenticateUser'
import { isJwtValid } from '../validators'
import { Link, useNavigate } from 'react-router-dom'
import './Container.sass'

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
        <div>
            <form className="Container" onSubmit={handleFormSubmit}>
                <input className="Input" type="username" name="username" placeholder="Nombre de usuario" />
                <input className="Input" type="password" name="password" placeholder="Contraseña" />
                <button className="Button__orange " type="submit" >Iniciar sesión</button>
                <Link className="alink" to="/register" >Registrarse</Link>
            </form>
        </div>

    </div>
}

export default Login