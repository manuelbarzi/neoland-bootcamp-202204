import { useContext } from 'react'
import Context from './Context'
import updateUserName from '../logic/updateUserName'

function ChangeEmail(props) {

    const { handleFeedback } = useContext(Context)

    const handleSaveEmailClick = event => {
        event.preventDefault()

        const newEmail = event.target.email.value;
            (async () => {
                try {
                    await updateUserName(sessionStorage.token, newEmail)
                        
                    handleFeedback({ level: 'success', message: 'Email cambiado'})
                    props.onProfileChanged()
                    
                } catch(error) {
                    handleFeedback({ level: 'error', message: error.message})
                }
            })();
    }

    const handleClickBackToProfile = event => {
        event.preventDefault()
        props.onClickedBackToProfile()
    }



    return <div className="changeName Container">
        <form className="Container mw" onSubmit={handleSaveEmailClick}>
            <button className="Button Button__Day__Flecha" onClick={handleClickBackToProfile}>atrás</button>
            <input className="form" type="text" name="email" placeholder="Nuevo email"/>
            <button className="Button__Save">Guardar</button>
        </form>
    </div>
}

export default ChangeEmail