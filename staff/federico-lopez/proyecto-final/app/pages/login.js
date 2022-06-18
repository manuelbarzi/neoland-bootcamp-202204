// import { useContext } from 'react'
import Link from 'next/link'
import { authenticateUser } from '../logic'
import { setCookie, verifyTokenWithAPICall } from '../helpers'
import { useRouter } from 'next/router'
import { LoginForm, QuaternaryButton, Logo } from '../components'

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
            setCookie('token', token, '3600')

            router.push('/home')
        } catch (error) {
            console.error(error)
            // handleFeedback(error.message)
        }
    }
    return (
        <section className="w-full flex flex-col gap-10 items-center">
            <Logo className="w-1/3" />
            <LoginForm />
            <div className="flex flex-col gap-3 items-center">
                <p>Don't have an account yet?</p>
                <QuaternaryButton>REGISTER</QuaternaryButton>
            </div>
        </section>
    )

    // return <div>
    //     <form onSubmit={onFormSubmit}>
    //         <h1>Log in</h1>
    //         <fieldset>
    //             <label htmlFor="email">Enter your email</label>
    //             <Input type="email" name="email" id="email" placeholder="example@example.com" required />
    //         </fieldset>
    //         <fieldset>
    //             <label htmlFor="password">Password</label>
    //             <Input type="password" name="password" id="password" placeholder="*******" required />
    //         </fieldset>
    //         <button type="submit">Log in</button>
    //     </form>
    //     <p>Don't have an account yet? <br /> <Link href="/register"><a>Register here</a></Link> </p>
    // </div>
}

export async function getServerSideProps({ req, res }) {
    const token = await verifyTokenWithAPICall(req, res)

    return {
        props: {}
    }
}

