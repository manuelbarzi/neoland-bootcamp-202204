import Link from 'next/link'
// import { useContext } from 'react'
import { retrieveUser, updateUser } from '../logic'
import { verifyTokenWithAPICall } from '../helpers'
import { useRouter } from 'next/router'
import { EditProfileForm, FlexColSection, Footer, Header, QuaternaryAnchor } from '../components'
// import Context from './Context'

export default function editProfile({ token, user }) {
    // const { handleFeedback } = useContext(Context)
    const router = useRouter()

    const handleFormSubmit = event => {
        event.preventDefault()

        const firstName = event.target.firstName.value
        const lastName = event.target.lastName.value
        const dateOfBirth = new Date(event.target.dateOfBirth.value)

        try {
            updateUser(token, { firstName, lastName, dateOfBirth })

            router.push('/')

        } catch (error) {
            console.error(error)
        }
    }

    const onLogOutClick = () => {
        router.push('/logout')
    }

    return <>
        <Header pageProps="Profile" />
        <FlexColSection className="py-20 items-center justify-center gap-5">
            <button onClick={onLogOutClick}>LogOut</button>
            <EditProfileForm
                onSubmit={handleFormSubmit} user={user} />
            
            <Link href="/">
                <QuaternaryAnchor>CANCEL</QuaternaryAnchor>
            </Link>
        </FlexColSection>
        <Footer userRegistered={!!token} page="user-session" />
    </>
}

export async function getServerSideProps({ req, res }) {
    const token = await verifyTokenWithAPICall(req, res)

    const user = await retrieveUser(token)

    return {
        props: { user, token }
    }
}