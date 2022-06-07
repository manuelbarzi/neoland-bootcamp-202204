import { useContext } from 'react'
import { updateUser } from '../logic'
import Context from './Context'

function editProfile(props) {
    // const { handleFeedback } = useContext(Context)

    const handleFormSubmit = event => {
        event.preventDefault()

        const firstName = event.target.firstName.value
        const lastName = event.target.lastName.value

        const dayOfBirth = event.target.dayOfBirth.value
        const monthOfBirth = event.target.monthOfBirth.value
        const yearOfBirth = event.target.yearOfBirth.value

        const dateOfBirth = new Date(yearOfBirth, monthOfBirth, dayOfBirth)

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
            <button type="submit" className="SubmitButton button button__light">Save</button>
        </form>
    </div>
}

export default editProfile