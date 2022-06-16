// import { useContext } from 'react'
import { retrieveUser, updateUser } from '../logic'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { verifyTokenWithAPICall } from './helpers'
import { useRouter } from 'next/router'
// import Context from './Context'

function editProfile({ user }) {
    // const { handleFeedback } = useContext(Context)
    const router = useRouter()

    const handleFormSubmit = event => {
        event.preventDefault()

        const firstName = event.target.firstName.value
        const lastName = event.target.lastName.value
        const dateOfBirth = new Date(event.target.dateOfBirth.value)

        try {
            updateUser(token, { firstName, lastName, dateOfBirth })

            router.push('/home')

        } catch (error) {
            console.error(error)
        }
    }

    return <>
        <Header pageProps={'profile'}></Header>
        <main>
            <form onSubmit={handleFormSubmit}>
                <h2>Edit Profile</h2>
                <input type="text" name="firstName" id="firstName" placeholder="firstName" />
                <input type="text" name="lastName" id="lastName" placeholder="lastName" />
                <input type="date" name="dateOfBirth" id="dateOfBirth" />
                <button type="submit" >Save</button>
            </form>
        </main>
        <Footer userRegistered={!!token}></Footer>
    </>
}

export default editProfile

export async function getServerSideProps({ req, res }) {
    debugger
    const { props: { token } } = await verifyTokenWithAPICall(req, res)
    const user = await retrieveUser(token)

    return {
        props: { user, token }
    }
}