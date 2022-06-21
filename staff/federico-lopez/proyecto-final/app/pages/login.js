// import { useContext } from 'react'
import Link from 'next/link'
import { authenticateUser } from '../logic'
import { setCookie, verifyTokenWithAPICall } from '../helpers'
import { useRouter } from 'next/router'
import { FlexColSection, Logo, LoginForm, QuaternaryAnchor } from '../components'

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

            router.push('/')
        } catch (error) {
            console.error(error)
            // handleFeedback(error.message)
        }
    }
    return (
        <FlexColSection className="gap-10 justify-around items-center"
            onSubmit={onFormSubmit}>

            <Logo className="w-1/3" />

            <LoginForm />

            <div className="w-full flex flex-col gap-3 items-center">
                <p>Don't have an account yet?</p>
                <Link href="/register">
                    <QuaternaryAnchor className="w-1/3">REGISTER</QuaternaryAnchor>
                </Link>
            </div>

        </FlexColSection>
    )
}

export async function getServerSideProps(ctx) {
    debugger
    const { req, res } = ctx
    const token = await verifyTokenWithAPICall(req, res)

    return {
        props: {}
    }
}

