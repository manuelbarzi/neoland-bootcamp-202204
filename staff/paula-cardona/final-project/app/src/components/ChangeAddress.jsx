import { useContext } from 'react'
import Context from './Context'
import updateUserAddress from '../logic/updateUserAddress'


function ChangeAddress(props) {

    const { handleFeedback } = useContext(Context)

    const handleSaveAddressClick = event => {
        event.preventDefault()

        const newAddress = event.target.address.value;
            (async () => {
                try {
                    await updateUserAddress(sessionStorage.token, newAddress)
                        
                    handleFeedback({ level: 'success', message: 'Dirección de domicilio cambiada'})
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
   

    return <div className="Address Container">
        <form className="Container" onSubmit={handleSaveAddressClick}>
            <button className="Button Button__Day__Flecha" onClick={handleClickBackToProfile}>atrás</button>
            <input className="form" type="text" name="address" placeholder="Nueva dirección de domicilio"/>
            <button className="Button">Guardar</button>
        </form>
    </div>
}

export default ChangeAddress
 