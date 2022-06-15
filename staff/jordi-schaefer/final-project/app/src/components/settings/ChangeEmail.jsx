import { useContext } from 'react'
import Context from '../Context'
import updateUserEmail from '../../logic/updateUserEmail'

function ChangeEmail(props) {

    const { handleFeedback } = useContext(Context)

    const handleSaveClick = event => {
        event.preventDefault()

        const email = event.target.email.value
        const confirmEmail = event.target.confirmEmail.value

        if (email !== confirmEmail) {
            handleFeedback({ type: 'error', message: 'Email does not match'})
            return 
        }

        try {
            updateUserEmail(sessionStorage.token, email, (error) => {
                if (error) {
                    handleFeedback({ type: 'error', message: error.message})
                    return
                }

                handleFeedback({ type: 'success', message: 'Email changed'})
                props.onDataChanged()
            })
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }


    return <div className="Container m__form mw">
        <form className="Container mw" onSubmit={handleSaveClick}>
            <input className="form" type="text" name="email" placeholder=" New email"/>
            <input className="form" type="text" name="confirmEmail" placeholder=" Confirm new email"/>
            <button className="Button__color mt_button">Save</button>
        </form>
    </div>
}

export default ChangeEmail