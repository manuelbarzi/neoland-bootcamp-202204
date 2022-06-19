import { useContext } from 'react'
import Logger from 'vendor/Loggy'
import Context from './Context'
import registerUser from '../logic/registerUser'
import { isJwtValid } from 'validators'

function Register(props) {
    const logger = new Logger('Register')

    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const handleFormSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        try {
            registerUser(name, email, password, error => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })

                    return
                }

                props.onUserRegistered()
            })

        } catch (error) {
            handleFeedback({ level: 'error', message: error.message })
        }
    }

    const handleLoginLinkClick = event => {
        event.preventDefault()

        props.onLoginLinkClicked()
    }

    logger.info('render')

    return isJwtValid(sessionStorage.token) ? <></> : <div>
        <form className="Container" onSubmit={handleFormSubmit}>
            <input className="Input__register-login" type="text" name="name" placeholder="name" />
            <input className="Input__register-login" type="text" name="email" placeholder="email" />
            <input className="Input__register-login" type="password" name="password" placeholder="password" />
            <button className="Button Button--light">Register</button>
            <a href="#" onClick={handleLoginLinkClick}>Login</a>
        </form>
    </div>
}

export default Register