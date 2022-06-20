import { useRouter } from 'next/router'
import { PrimaryButton } from '../buttons'
import { Form } from '../elements'
import { Input } from './form-elements'

export const ChangePassword = ({ token, user, className, ...props }) => {
    const router = useRouter()

    const handleFormSubmit = event => {
        event.preventDefault()

        const password = event.target.password.value
        const newPassword = event.target.newPassword.value
        const newPasswordRepeat = event.target.newPasswordRepeat.value

        try {
            updateUser(token, { password, newPassword, newPasswordRepeat })

            router.push('/')

        } catch (error) {
            console.error(error)
        }
    }
    return <>
        <div className="py-4">
            <Form className="px-4" onSubmit={handleFormSubmit}>
                <Input className="text-xs border border-primary p-3" type="password" name="password" placeholder="current password" />
                <Input className="text-xs border border-primary p-3" type="password" name="password" placeholder="new password" />
                <Input className="text-xs border border-primary p-3" type="password" name="password" placeholder="repeat new password" />
                <PrimaryButton className="p-3">Save</PrimaryButton>
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