// import { useContext } from 'react'
import Link from 'next/link'
import { registerUser } from 'logic'
import { useRouter } from 'next/router'
import { verifyTokenWithAPICall } from '../helpers'
import { FlexColSection, Logo, BlueAnchor, RegisterForm, QuaternaryAnchor } from '../components'
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
        <FlexColSection className="gap-10 justify-center items-center"
            onSubmit={onFormSubmit}>
            <Logo />
            <RegisterForm />
            <div className="w-full gap-2 flex justify-center">
                <p class="text-myblack text-xs">Already have an account ?</p>
                <Link href="/login">
                    <BlueAnchor>Log In</BlueAnchor>
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