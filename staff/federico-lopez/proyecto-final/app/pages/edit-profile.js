// import { useContext } from 'react'
import { updateUser } from '../logic'
// import Context from './Context'

function editProfile(props) {
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

    return <div>
        <form onSubmit={handleFormSubmit}>
            <h2>Edit Profile</h2>
            <input type="text" name="firstName" id="firstName" placeholder="firstName" />
            <input type="text" name="lastName" id="lastName" placeholder="lastName" />
            <input type="date" name="dateOfBirth" id="dateOfBirth" min="1990-01-01" max="2022-01-01" />
            <button type="submit" >Save</button>
        </form>
    </div>
}

export default editProfile