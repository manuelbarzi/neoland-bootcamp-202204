import registerUser from "../logic/registerUser"
import {useContext} from "react" 
import Context from "./Context"

function Register(props) {
    const { handleFeedback } = useContext(Context)

    const handleFormSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const username = event.target.username.value
        const password = event.target.password.value

        registerUser(name, username, password, error => {
            if (error) {
                handleFeedback({ level: 'error', message: error.message })

                return
            }

            props.onUserRegistered()
        })
    }

    const handleLoginLinkClick = event => {
        event.preventDefault()

        props.onLoginLinkClicked()
    }

    return <div className="login-box">
        <form className="Container" onSubmit={handleFormSubmit}>
            <div className="user-box">
                <input className="Input Input--light" type="text" name="name" />
                <label>name</label>
            </div>
            <div className="user-box">
                <input className="Input Input--light" type="text" name="username" />
                <label>Username</label>
            </div>
            <div className="user-box">
                <input className="Input Input--light" type="password" name="password" />
                <label>Password</label>
            </div>
            <div className="user-box">
                <button className="Button Button--light Btn-ani">Register</button>
            </div>

            <a href="#" onClick={handleLoginLinkClick}> Go
                Login</a>
        </form>
    </div>
}
export default Register