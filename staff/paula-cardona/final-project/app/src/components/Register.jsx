import { useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import registerUser from '../logic/registerUser'
import { isJwtValid } from '../validators'
import { Link, useNavigate } from 'react-router-dom'


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

    return isJwtValid(sessionStorage.token) ? <></> : <div>
        <div>
        <form className="Container" onSubmit={handleFormSubmit}>
            <input className="Container__Input" type="text" name="name" placeholder="Nombre y Apellidos" />
            <input className="Container__Input" type="text" name="username" placeholder="Nombre de usuario" />
            <input className="Container__Input" type="email" name="email" placeholder="Email" />
            <input className="Container__Input" type="password" name="password" placeholder="Contraseña" />
            <input className="" type="text" name="address" placeholder="Dirección de envío" />
            <button className="Button__orange">Registrarse</button>
            <Link className="a" to="/login">Iniciar sesión</Link>
        </form>
        </div>
    </div>
}

export default Register















