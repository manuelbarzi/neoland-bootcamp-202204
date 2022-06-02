import { useContext, useState } from 'react'
import Context from './Context'
import deleteUser from '../logic/deleteUser'

function DeleteUser(props) {

    const [view, setView] = useState('delete')
    const [password, setPassword] = useState(null)
    const { handleFeedback } = useContext(Context)


    const handleDeleteClick = (event) => {
        event.preventDefault()
        setPassword(event.target.elemento.value)

        setView('confirm')
    }


    const handleConfirmClick = () => {
        try {
            deleteUser(sessionStorage.token, password, (error) => {
                if (error) {
                    handleFeedback({ type: 'error', message: error.message})
                    return
                }

                handleFeedback({ type: 'success', message: 'User deleted'})
                delete sessionStorage.token
                props.onDeletedUser()
            })
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
        setPassword(null)
        setView('delete')
    }


    return <div className="DeleteUser">
        {view === 'delete' && <form className="Container" onSubmit={handleDeleteClick}>
            <input className="form" type="password" name="elemento" placeholder=" Confirm your password"/>
            <button className="Button">Delete</button>
        </form> }

        {view === 'confirm' && <div className="Container">
            <p className="Confirm__message">Are you sure you want to delete your user and stickers permanetly?</p>
            <button className="Button" onClick={handleConfirmClick}>Delete</button>
        </div> }
    </div>
}

export default DeleteUser






// const { Component } = React

// class DeleteUser extends Component {
//     handleFormSubmit = event => {
//         event.preventDefault()
    
//         deleteUserFun(this.props.username, (error) => {
//             if (error) 
//                 alert(error.message)
//         })

//         delete sessionStorage.username
//         this.props.onDeletedUser()
//     }

//     render() {
//         return <div className="DeleteUser">
//         <form className="Profile__form" onSubmit={this.handleFormSubmit}>
//             <h2>Delete User</h2>
//             <input type="password" name="password" id="password" placeholder="password" />
//             <button type="submit" className="SubmitButton button button__light">Save</button>
//         </form>
//     </div>
//     }
// }