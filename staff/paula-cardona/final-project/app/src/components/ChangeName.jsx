import { useContext } from 'react'
import Context from './Context'
import updateUserName from '../logic/updateUserName'
import './Changes.sass'

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
    


    return  <div>
        <div className=" back" >
            <button className=" atras" onClick={handleClickBackToProfile}>atrás</button>
        </div>
        <form className="Container" onSubmit={handleSaveNameClick}>
            <input className="form" type="text" name="name" placeholder=" Nuevo nombre y apellidos"/>
            <button className="Button">Guardar</button>
        </form>
    </div>
}

export default ChangeName