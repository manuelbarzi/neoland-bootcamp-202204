import { useContext } from 'react'
import Context from '../Context'
import updateUserPassword from '../../logic/updateUserPassword'

function ChangePassword(props) {

    const { handleFeedback } = useContext(Context)

    const handleSaveClick = async(event) => {
        event.preventDefault()
        const password = event.target.password.value
        const newPassword = event.target.newPassword.value
        const newPasswordRepeat = event.target.newPasswordRepeat.value

        try {
            await updateUserPassword(sessionStorage.token, password, newPassword, newPasswordRepeat)
            handleFeedback({ type: 'success', message: 'Password saved'})
            props.onDataChanged()
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }

    return <div className="Container m__form mw">
        <form className="Container mw" onSubmit={handleSaveClick}>
            <input className="form" type="password" name="password" placeholder=" Current password"/>
            <input className="form" type="password" name="newPassword" placeholder=" New password"/>
            <input className="form" type="password" name="newPasswordRepeat" placeholder=" Repeat new password"/>

            <button className="Button__color mt_button">Save</button>
        </form>
    </div>
}

export default ChangePassword