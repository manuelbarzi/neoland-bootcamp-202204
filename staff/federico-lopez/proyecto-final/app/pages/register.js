// import { useContext } from 'react'
import Link from 'next/link'
import { registerUser } from 'logic'
import { useRouter } from 'next/router'
import { verifyTokenWithAPICall } from '../helpers'
import { FlexColSection, Logo, RegisterForm, QuaternaryAnchor } from '../components'
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

    return (
        <FlexColSection className="gap-10 justify-around items-center"
            onSubmit={onFormSubmit}>

            <Logo className="w-1/3" />

            <RegisterForm />
            
            <div className="w-full flex flex-col gap-3 items-center">
                <p>Have an account?</p>
                <Link href="/login">
                    <QuaternaryAnchor className="w-1/3">LOG IN</QuaternaryAnchor>
                </Link>
            </div>

        </FlexColSection>
    )
}

export async function getServerSideProps({ req, res }) {
    const token = verifyTokenWithAPICall(req, res)

    return {
        props: {}
    }
}