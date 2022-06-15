// import { useContext } from 'react'
import Link from 'next/link'
import { authenticateUser } from '../logic'
import { verifyTokenWithAPICall } from './helpers'
import { useRouter } from 'next/router'

export default function Login(props) {
    const router = useRouter()

    // const { handleFeedback } = useContext(Context)

    const onFormSubmit = async event => {
        event.preventDefault()

        try {
            const email = event.target.email.value
            const password = event.target.password.value

            event.target.reset()

            const token = await authenticateUser(email, password)
            // handleFeedback

            document.cookie = `token=${token}; max-age=3600;`

            router.push('/home')
        } catch (error) {
            console.error(error)
            // handleFeedback(error.message)
        }
    }

    return <div>
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

export async function getServerSideProps({ req, res }) {
    return verifyTokenWithAPICall(req, res)
}

