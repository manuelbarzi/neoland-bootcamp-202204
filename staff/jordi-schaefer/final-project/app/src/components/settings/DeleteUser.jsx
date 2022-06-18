import { useContext, useState } from 'react'
import Context from '../Context'
import deleteUser from '../../logic/deleteUser'

function DeleteUser(props) {

    const [view, setView] = useState('delete')
    const [password, setPassword] = useState(null)
    const { handleFeedback } = useContext(Context)

    const handleDeleteClick = (event) => {
        event.preventDefault()
        setPassword(event.target.elemento.value)
        setView('confirm')
    }

    const handleConfirmClick = async() => {
        try {
            await deleteUser(sessionStorage.token, password)
            handleFeedback({ type: 'success', message: 'User deleted'})
            delete sessionStorage.token
            props.onDeletedUser()
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
        setPassword(null)
        setView('delete')
    }


    return <div className="Container m__form mw">
        {view === 'delete' && <form className="Container mw" onSubmit={handleDeleteClick}>
            <input className="form" type="password" name="elemento" placeholder=" Confirm your password"/>
            <button className="Button__color mt_button">Delete</button>
        </form> }

        {view === 'confirm' && <div className="Container mw">
            <p className="Confirm__message">Are you sure you want to delete your user and all your activities permanetly?</p>
            <button className="Button__color mt_button Button__delete" onClick={handleConfirmClick}>Delete</button>
        </div> }
    </div>
}

export default DeleteUser