import { useContext } from 'react'
import Context from './Context'
import updateUserPassword from '../logic/updateUserPassword'

function ChangePassword (props) {

    const { handleFeedback } = useContext(Context)

    const handleSaveClick = event => {
        event.preventDefault()

        const password = event.target.password.value
        const newPassword = event.target.newPassword.value
        const newPasswordRepeat = event.target.newPasswordRepeat.value

        try {
    
            updateUserPassword(sessionStorage.token, password, newPassword, newPasswordRepeat, error => {
                
                if (error) {
                    handleFeedback({ level: 'error', message: error.message})
                    return
                }
                handleFeedback({ level: 'success', message: 'Contraseña guardada'})
                props.onProfileChanged()
            })
        } catch(error) {
            handleFeedback({ level: 'error', message: error.message})
        }
    }
    
    const handleClickBackToProfile = event => {
        event.preventDefault()
        props.onClickedBackToProfile()
    }


    return <div className="ChangePassword Container">
        <form className="Container" onSubmit={handleSaveClick}>
            <button className="Button Button__Day__Flecha" onClick={handleClickBackToProfile}>atrás</button>
            <input className="form" type="password" name="password" placeholder=" Contraseña actual"/>
            <input className="form" type="password" name="newPassword" placeholder=" Constraseña nueva"/>
            <input className="form" type="password" name="newPasswordRepeat" placeholder="Confirmación contraseña"/>

            <button className="Button">Guardar</button>
        </form>
    </div>
}

export default ChangePassword
 