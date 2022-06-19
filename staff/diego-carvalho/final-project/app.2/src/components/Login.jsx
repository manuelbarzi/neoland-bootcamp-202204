import { useContext } from 'react'
import Logger from 'vendor/Loggy'
import Context from './Context'
import authenticateUser from '../logic/authenticateUser'
import { isJwtValid } from 'validators'

function Login(props) {
    const logger = new Logger('Login')

    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const handleFormSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token

                    props.onUserLoggedIn()

                })
                .catch(error => handleFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            handleFeedback({ level: 'error', message: error.message })
        }
    }
    const handleRegisterLinkClick = event => {
        event.preventDefault()

        props.onRegisterLinkClicked()
    }

    logger.info('render')

    return isJwtValid(sessionStorage.token) ? <></> : <div>
        <form className="Container" onSubmit={handleFormSubmit}>
            <input className="Input__register-login" type="text" name="email" placeholder="email" />
            <input className="Input__register-login" type="password" name="password" placeholder="password" />
            <button className="Button Button--light">Login</button>
            <a href="#" onClick={handleRegisterLinkClick}>Register</a>
        </form>
    </div>
}

export default Login