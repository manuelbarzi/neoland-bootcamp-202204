import { useRouter } from 'next/router'
import { PrimaryButton } from '../buttons'
import { Form } from '../elements'
import { Input } from './form-elements'

export const ChangeName = ({ token, user, className, ...props }) => {
    const router = useRouter()

    const handleFormSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const surnames = event.target.surnames.value

        try {
            updateUser(token, { name, surnames })

            router.push('/')

        } catch (error) {
            console.error(error)
        }
    }
    return <>
        <div className="py-4">
            <Form className="px-4" onSubmit={handleFormSubmit}>
                <Input className="text-xs border border-primary p-3" type="text" name="name" placeholder="name" required />
                <Input className="text-xs border border-primary p-3" type="text" name="surnames" placeholder="surnames" />
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