import { useContext } from 'react'
import Context from './Context'
import updateUserAddress from '../logic/updateUserAddress'
import './Changes.sass'


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
   

    return <div >
        <div className='back'>
            <button className='atras' onClick={handleClickBackToProfile}>atràs</button>
        </div>
        <form className="Container" onSubmit={handleSaveAddressClick}>
            <input className="form" type="text" name="address" placeholder="Nueva dirección de envío"/>
            <button className="Button">Guardar</button>
        </form>
    </div>
}

export default ChangeAddress
 