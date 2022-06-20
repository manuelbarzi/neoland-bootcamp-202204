import { useContext } from 'react'
import Context from './Context'
import updateUserName from '../logic/updateUserName'

function ChangeName(props) {
    

    const { handleFeedback } = useContext(Context)

    const handleSaveNameClick = event => {
        event.preventDefault()
        
        const newName = event.target.name.value;
            (async () => {
                try {
                    await updateUserName(sessionStorage.token, newName)
                    
                    handleFeedback({ level: 'success', message: 'Nombre cambiado'})
                    props.onProfileChanged()
                    
                } catch(error) {
                    handleFeedback({ level: 'error', message: error.message})
                }
            })();
    
    }
    
    const handleClickBackToProfile = event => {
        event.preventDefault()
        props.onProfileChanged()
    }
    


    return  <div className="changeName Container">
        <form className="Container mw" onSubmit={handleSaveNameClick}>
            <button className="Button Button__Day__Flecha" onClick={handleClickBackToProfile}>atrás</button>
            <input className="form" type="text" name="name" placeholder=" Nuevo nombre y apellidos"/>
            <button className="Button__Save">Guardar</button>
        </form>
    </div>
}

export default ChangeName