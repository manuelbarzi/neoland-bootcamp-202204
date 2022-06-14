// import { useContext, useEffect } from 'react'
import Link from 'next/link'
import { authenticateUser } from '../logic'
import { isValidJWT } from 'validators'
// import Context from './Context'

export default function Login(props) {
    // const { handleFeedback } = useContext(Context)

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
            console.log('successfully authenticate')

            sessionStorage.token = token

            document.cookie = `token=${token}`
            // handleFeedback('successfully logged in', 'succeed')

            // props.onLoggedIn()
        } catch (error) {
            console.error(error)
            // handleFeedback(error.message)
        }
    }

    return /*isValidJWT(sessionStorage.token) ? <></> : */ <div>
        <form onSubmit={onFormSubmit}>
            <h1>Log in</h1>
            <fieldset>
                <label htmlFor="email">Enter your email</label>
                <input type="email" name="email" id="email" placeholder="example@example.com" required />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="*******" required />
            </fieldset>
            <button type="submit">Log in</button>
        </form>
        <p>Don't have an account yet? <br /> <Link href="/register"><a>Register here</a></Link> </p>
    </div>
}

export async function getServerSideProps(context) {
    return {
        props: {},
    }
}