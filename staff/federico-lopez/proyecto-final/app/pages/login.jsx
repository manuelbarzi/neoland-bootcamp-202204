import { useContext } from 'react'
import { authenticateUser } from '../logic'
import { setCookie, verifyTokenAndRedirect } from '../helpers'
import { useRouter } from 'next/router'
import { FlexColSection, Logo, LoginForm, Context } from '../components'

export default function Login() {
    const router = useRouter()

    const { handleFeedback } = useContext(Context)

    const onFormSubmit = async event => {
        event.preventDefault()

        try {
            const email = event.target.email.value
            const password = event.target.password.value

            event.target.reset()

            const token = await authenticateUser(email, password)

            handleFeedback('success', 'Login', 'successfully logged in')

            setCookie('token', token, '3600')

            router.push('/')
        } catch (error) {
            handleFeedback('error', 'Login failed', error.message)
        }
    }
    return (
        <FlexColSection className="min-h-screen bg-primary gap-10 justify-center items-center">
            <Logo className="w-72 h-72 drop-shadow-custom-logo rounded-full bg-white" />
            <LoginForm className="px-4" onSubmit={onFormSubmit} />
        </FlexColSection>
    )
}

export async function getServerSideProps({ req, res }) {
    await verifyTokenAndRedirect(req, res)

    return { props: {} }
}

