import { useContext } from 'react'
import Context from './Context'
import registerUser from '../logic/registerUser'

function Register (props){

    const { handleFeedback } = useContext(Context)

    const handleLoginLinkClick = event => {
        event.preventDefault()
        //event.stopPropagation()

        props.onLoginLinkClicked()
    }

    const handleFormSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const username = event.target.username.value
        const password = event.target.password.value

        try {
            registerUser(name, username, password, error => {
                if (error) {
                    handleFeedback({ type: 'error', message: error.message})
                    return 
                }
                props.onUserRegistered()
            })
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }


    return <div className="Container">
        <form className="Container" onSubmit={handleFormSubmit}>
            <input className="form" type="text" name="name" placeholder=" Name"/>
            <input className="form" type="text" name="username" placeholder=" Username"/>
            <input className="form" type="password" name="password" placeholder=" Password"/>
            <button className="Button">Register</button>
        </form>
            <a href="#" onClick={handleLoginLinkClick}>Login</a>
    </div>
}

export default Register