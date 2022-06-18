import { useContext } from 'react'
import Context from './Context'
import authenticateUser from '../logic/authenticateUser'

function Login (props) {

    const { handleFeedback } = useContext(Context)

    const handleWelcomeLinkClick = event => {
        event.preventDefault()
        props.onWelcomeLinkClicked()
    }

    const handleFormSubmit = async(event) => {
        event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value

        try {
            const token = await authenticateUser(username, password)
            sessionStorage.token = token
            props.onUserLoggedIn()
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }

    return <div className="Container mw mh Flex__start">
        <header className="Header">
            <button className="Button__back" onClick={handleWelcomeLinkClick}>{`< Back`}</button>
            <h1 className="Center">Login</h1>
        </header>
        <form className="Container mw m__form" onSubmit={handleFormSubmit}>
            <input className="form" type="text" name="username" placeholder=" Username"/>
            <input className="form" type="password" name="password" placeholder=" Password"/>
            <button className="Button__color mt_button">Login</button>
        </form>
    </div>
}

export default Login