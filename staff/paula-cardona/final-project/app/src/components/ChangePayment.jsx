import { useContext } from 'react'
import Context from './Context'


function ChangePassword (props) {

    const { handleFeedback } = useContext(Context)

    const handleClickBackToProfile = event => {
        event.preventDefault()
        props.onClickedBackToProfile()
    }
   

    return <div className="Payment Container">
        <form className="Container" >
            <button className="Button Button__Day__Flecha" onClick={handleClickBackToProfile}>atrás</button>
            <p>Explicación como la de aboutus</p>

            <button className="Button">Save</button>
        </form>
    </div>
}

export default ChangePassword
 