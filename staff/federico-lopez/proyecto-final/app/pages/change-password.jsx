import { updatePassword } from '../logic'
import { verifyTokenWithAPICall } from '../helpers'

export default function ChangePassword({ token }) {

    const onFormSubmit = async event => {
        debugger
        event.preventDefault()

        const oldPassword = event.target.oldPassword.value
        const password = event.target.password.value
        const repeatPassword = event.target.repeatPassword.value

        event.target.reset()

        try {
            debugger
            await updatePassword(token, oldPassword, password, repeatPassword)

            console.log('successfully updated')

            // handleFeedback('successfully logged in', 'succeed')

            // props.onLoggedIn()
        } catch (error) {
            console.error(error)
            // handleFeedback(error.message)
        }
    }

    return (
    <div>
        <form onSubmit={onFormSubmit}>
            <h1>Change Password</h1>
            <fieldset>
                <label htmlFor="oldPassword">Previous Password</label>
                <input type="password" name="oldPassword" id="oldPassword" placeholder="*******" required />
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
    )
}

export async function getServerSideProps({ req, res }) {
    const token = await verifyTokenWithAPICall(req, res)

    return {
        props: { token }
    }
}