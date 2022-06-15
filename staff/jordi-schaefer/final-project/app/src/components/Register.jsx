import { useContext } from 'react'
import Context from './Context'
import registerUser from '../logic/registerUser'
import authenticateUser from '../logic/authenticateUser'

function Register (props){

    const { handleFeedback } = useContext(Context)

    const handleWelcomeLinkClick = event => {
        event.preventDefault()
        props.onWelcomeLinkClicked()
    }

    const handleFormSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const username = event.target.username.value
        const email = event.target.email.value
        const password = event.target.password.value
        const repeatPassword = event.target.repeatPassword.value

        if (password !== repeatPassword) {
            handleFeedback({ type: 'error', message: 'Password does not match'})
            return 
        }

        try {
            registerUser(name, username, password, email, error => {
                if (error) {
                    handleFeedback({ type: 'error', message: error.message})
                    return 
                }

                authenticateUser(username, password, (error, token) => {
                    if (error) {
                        handleFeedback({ type: 'error', message: error.message})
                        return
                    }
                    sessionStorage.token = token
                    props.onUserLoggedIn()
                })
            })
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }

    return <div className="Container mw mh Flex__start">
        <header className="Header">
            <button className="Button__back" onClick={handleWelcomeLinkClick}>{`< Back`}</button>
            <h1 className="Center">Register</h1>
        </header>
        <form className="Container  mw m__form" onSubmit={handleFormSubmit}>
            <input className="form" type="text" name="name" placeholder=" Name"/>
            <input className="form" type="text" name="username" placeholder=" Username"/>
            <input className="form" type="email" name="email" placeholder=" Email"/>
            <input className="form" type="password" name="password" placeholder=" Password"/>
            <input className="form" type="password" name="repeatPassword" placeholder=" Confirm password"/>
            <button className="Button__color mt_button">Register</button>
        </form>
    </div>
}

export default Register