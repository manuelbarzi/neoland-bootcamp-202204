import { useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import registerUser from '../logic/registerUser'
import { isJwtValid } from '../validators'

function Register(props) {
    const logger = new Logger('Register')

    logger.info('call')


const { handleFeedback } = useContext(Context)

const handleFormSubmit = event => {
    event.preventDefault()

    const name = event.target.name.value
    const surname = event.target.surname.value
    const username = event.target.username.value
    const email = event.target.email.value
    const phone = event.target.phone.value
    const password = event.target.password.value
    
    try {
        registerUser(name, surname, username, email, phone, password, error => {
            if (error) {
                handleFeedback({ level: 'error', message: error.message })

                return
            }

            props.onUserRegistered()
        })
    } catch(error) {
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
        <input className="Input Input--light" type="text" name="name" placeholder="name" />
        <input className="Input Input--light" type="text" name="surname" placeholder="surname" />
        <input className="Input Input--light" type="text" name="username" placeholder="username" />
        <input className="Input Input--light" type="email" name="email" placeholder="email" />
        <input className="Input Input--light" type="number" name="phone" placeholder="phone" />
        <input className="Input Input--light" type="password" name="password" placeholder="password" />
        <button className="Button Button--light">Register</button>
        <button className="Button Button--light"><a href="#" onClick={handleLoginLinkClick}>Login</a></button>
    </form>
</div>
}

export default Register