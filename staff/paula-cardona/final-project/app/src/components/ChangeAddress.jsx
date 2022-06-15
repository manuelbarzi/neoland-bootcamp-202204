import { useContext } from 'react'
import Context from './Context'


function ChangeAddress(props) {

    const { handleFeedback } = useContext(Context)

    const handleClickBackToProfile = event => {
        event.preventDefault()
        props.onClickedBackToProfile()
    }
   

    return <div className="Address Container">
        <form className="Container" >
            <button className="Button Button__Day__Flecha" onClick={handleClickBackToProfile}>atrás</button>
            <p>TENGO QUE PENSAR</p>

            <button className="Button">Save</button>
        </form>
    </div>
}

export default ChangeAddress
 