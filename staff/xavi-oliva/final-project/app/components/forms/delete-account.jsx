import { useRouter } from 'next/router'
import { PrimaryButton } from '../buttons'
import { Form } from '../elements'
import { Input } from './form-elements'
import { unregisterUser } from '../../logic'

export const DeleteAccount = ({ token, user, className, ...props }) => {
    const router = useRouter()

    const handleFormSubmit = async event => {
        event.preventDefault()

        const password = event.target.password.value
        const repeatPassword = event.target.repeatPassword.value

        event.target.reset()

        try {
            await unregisterUser(sessionStorage.token, password, repeatPassword)

            console.log('successfully deleted')

            // handleFeedback('successfully logged in', 'succeed')

            // props.onLoggedIn()
        } catch (error) {
            console.error(error)
            // handleFeedback(error.message)
        }
    }
    return <>
        <div className="py-4">
            <Form className="px-4" onSubmit={handleFormSubmit}>
                <Input className="text-xs border border-primary p-3" type="password" name="password" placeholder="password" />
                <Input className="text-xs border border-primary p-3" type="password" name="repeatPassword" placeholder="repeat password" />
                <PrimaryButton className="p-3">Delete</PrimaryButton>
            </Form>
        </div>
    </>
}

export async function getServerSideProps({ req, res }) {
    const { props: { token } } = await verifyTokenWithAPICall(req, res)
    const user = await retrieveUser(token)

    return {
        props: { user, token }
    }
}