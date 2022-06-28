import { useContext } from 'react'
import Context from './Context'
import updateUserName from '../logic/updateUserName'
import './Changes.sass'

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



    return <div>
        <div className="back">
            <button className="atras" onClick={handleClickBackToProfile}>atrás</button>
        </div>
        <form className="Container mw" onSubmit={handleSaveEmailClick}>
            <input className="form" type="text" name="email" placeholder="Nuevo email"/>
            <button className="Button">Guardar</button>
        </form>
    </div>
}

export default ChangeEmail