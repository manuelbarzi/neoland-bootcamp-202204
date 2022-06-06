// import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { authenticateUser } from '../logic/'
import { isValidJWT } from '../validators'
// import Context from './Context'
import './Login.sass'

function Login(props) {
    // const { handleFeedback } = useContext(Context)

    // const navigate = useNavigate()

    // useEffect(() => {
    //     if (isValidJWT(sessionStorage.token)) navigate('./')
    // }, [])

    const onFormSubmit = async event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        event.target.reset()

        try {
            const token = await authenticateUser(email, password)

            sessionStorage.token = token

            // handleFeedback('successfully logged in', 'succeed')

            // props.onLoggedIn()
        } catch (error) {
            // handleFeedback(error.message)
        }
    }

    const onRegisterNavigationClick = event => {
        event.preventDefault()

        // props.onRegisterNavigation()
    }

    return isValidJWT(sessionStorage.token) ? <></>
    : <div className="Login">
        <form className="form" onSubmit={onFormSubmit}>
            <h1>Log in</h1>
            <fieldset>
                <label htmlFor="email">Enter your email</label>
                <input className="input" type="email" name="email" id="email" placeholder="example@example.com" />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Password</label>
                <input className="input" type="password" name="password" id="password" placeholder="*******" />
            </fieldset>
            <button className="button" type="submit">Log in</button>
        </form>
        <p>You don't have an account yet? <br /> <a href="#" onClick={onRegisterNavigationClick} >Register here</a> </p>
    </div>
}

export default Login