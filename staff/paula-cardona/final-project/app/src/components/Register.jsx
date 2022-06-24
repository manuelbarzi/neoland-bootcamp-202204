import { useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import registerUser from '../logic/registerUser'
import { isJwtValid } from '../validators'
import { Link, useNavigate } from 'react-router-dom'
import './Register.sass'

function Register(props) {
    const logger = new Logger('Register')

    const navigate = useNavigate()
    const { handleFeedback } = useContext(Context)

    logger.info('call')



    const handleFormSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value
        const username = event.target.username.value
        const email = event.target.email.value
        const password = event.target.password.value
        const address = event.target.address.value;
            (async () => {
                try {
                    await registerUser(name, username, email, password, address)
                    navigate('/login')
                } catch (error) {
                    handleFeedback({ level: 'error', message: error.message })
                }
            })();
    }

    logger.info('render')

    return isJwtValid(sessionStorage.token) ? <></> : 
        <div>
        <form className="Register" onSubmit={handleFormSubmit}>
            <input className="Input_entrada" type="text" name="name" placeholder="Nombre y Apellidos" />
            <input className="Input_entrada" type="text" name="username" placeholder="Nombre de usuario" />
            <input className="Input_entrada" type="email" name="email" placeholder="Email" />
            <input className="Input_entrada" type="password" name="password" placeholder="Contraseña" />
            <input className="Input_entrada" type="text" name="address" placeholder="Dirección de envío" />
            <button className="Button__orange">Registrarse</button>
            <Link className="aLogin" to="/login">Iniciar sesión</Link>
        </form>
    </div>
}

export default Register















