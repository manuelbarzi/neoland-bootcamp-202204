// import { useContext } from 'react'
import { registerUser } from 'logic'
import { isValidJWT } from '../validators'
// import Context from './Context'

export default function Register(props) {
    // const { handleFeedback } = useContext(Context)

    const onFormSubmit = async event => {
        event.preventDefault()

        const email = event.target.email.value
        const username = event.target.username.value
        const password = event.target.password.value
        const repeatPassword = event.target.repeatPassword.value

        try {
            await registerUser(username, email, password, repeatPassword)

            console.log('successfully registered')
                // handleFeedback('the registration process succeded', 'succeed')

                // props.onRegistered()
        } catch (error) {
            console.error(error)
            // handleFeedback(error.message)
        }
    }

    const onLoginNavigationClick = event => {
        event.preventDefault()

        // props.onLoginNavigation()
    }

    return /*isValidJWT(sessionStorage.token) ? <></> : */ <div className="Register">
        <form className="form" onSubmit={onFormSubmit}>
            <h1>Register</h1>
            <fieldset>
                <label htmlFor="email">Enter your email</label>
                <input className="input" type="email" name="email" id="email" placeholder="example@example.com" />
            </fieldset>
            <fieldset>
                <label htmlFor="username">Username</label>
                <input className="input" type="text" name="username" id="username" placeholder="username" />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Password</label>
                <input className="input" type="password" name="password" id="password" placeholder="*******" />
            </fieldset>
            <fieldset>
                <label htmlFor="repeatPassword">Password</label>
                <input className="input" type="password" name="repeatPassword" id="repeatPassword" placeholder="*******" />
            </fieldset>
            <button className="button" type="submit">Register</button>
        </form>
        <p>Have an account? <a href="#" onClick={onLoginNavigationClick}>Log in</a> </p>
    </div>
}