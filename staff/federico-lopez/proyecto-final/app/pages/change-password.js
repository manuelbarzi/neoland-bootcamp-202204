// import { useContext, useEffect } from 'react'
import { updateUserPassword } from '../logic'
// import { isValidJWT } from 'validators'
// import Context from './Context'

export default function ChangePassword(props) {
    // const { handleFeedback } = useContext(Context)

    // const navigate = useNavigate()

    // useEffect(() => {
    //     if (isValidJWT(sessionStorage.token)) navigate('./')
    // }, [])

    const onFormSubmit = async event => {
        event.preventDefault()

        const previousPassword = event.target.previousPassword.value
        const password = event.target.password.value
        const repeatPassword = event.target.repeatPassword.value

        event.target.reset()

        try {
            await updateUserPassword(sessionStorage.token, previousPassword, password, repeatPassword)

            console.log('successfully updated')

            // handleFeedback('successfully logged in', 'succeed')

            // props.onLoggedIn()
        } catch (error) {
            console.error(error)
            // handleFeedback(error.message)
        }
    }

    const onRegisterNavigationClick = event => {
        event.preventDefault()

        // props.onRegisterNavigation()
    }

    return /*isValidJWT(sessionStorage.token) ? <></> : */ <div>
        <form onSubmit={onFormSubmit}>
            <h1>Change Password</h1>
            <fieldset>
                <label htmlFor="previousPassword">Previous Password</label>
                <input type="password" name="previousPassword" id="previousPassword" placeholder="*******" required />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="*******" required />
            </fieldset>
            <fieldset>
                <label htmlFor="repeatPassword">Password</label>
                <input  type="password" name="repeatPassword" id="repeatPassword" placeholder="*******" required />
            </fieldset>
            <button type="submit">SAVE</button>
        </form>
    </div>
}