// import { useContext } from 'react'
import Link from 'next/link'
import { registerUser } from 'logic'
import { useRouter } from 'next/router'
import { verifyTokenWithAPICall } from './helpers'
// import Context from './Context'

export default function Register(props) {
    // const { handleFeedback } = useContext(Context)
    const router = useRouter()

    const onFormSubmit = async event => {
        event.preventDefault()

        const email = event.target.email.value
        const username = event.target.username.value
        const password = event.target.password.value
        const repeatPassword = event.target.repeatPassword.value

        try {
            await registerUser(username, email, password, repeatPassword)

            router.push('/login')

        } catch (error) {
            console.error(error)
            // handleFeedback(error.message)
        }
    }

    return <div className="Register">
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
        <p>Have an account? <Link href="/login"><a>Log in</a></Link> </p>
    </div>
}

export async function getServerSideProps({ req, res }) {
    return verifyTokenWithAPICall(req, res)
}