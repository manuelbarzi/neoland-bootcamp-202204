// import { useContext } from 'react'
import { updateUser } from '../logic'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { verifyTokenWithAPICall } from './helpers'
// import Context from './Context'

function editProfile({ token }) {
    // const { handleFeedback } = useContext(Context)

    const handleFormSubmit = event => {
        event.preventDefault()

        const firstName = event.target.firstName.value
        const lastName = event.target.lastName.value
        const dateOfBirth = new Date(event.target.dateOfBirth.value)

        try {
            updateUser(sessionStorage.token, { firstName, lastName, dateOfBirth })

            console.log('user updated')
            // props.onChangedName()

            // props.onChangedNameHome(firstName)
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
                <input type="date" name="dateOfBirth" id="dateOfBirth" min="1990-01-01" max="2022-01-01" />
                <button type="submit" >Save</button>
            </form>
        </main>
        <Footer userRegistered={!!token}></Footer>
    </>
}

export default editProfile

export async function getServerSideProps({ req, res }) {
    return verifyTokenWithAPICall(req, res)
}