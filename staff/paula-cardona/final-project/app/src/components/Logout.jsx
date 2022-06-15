import { useContext } from 'react'
import Context from './Context'


function Logout(props) {

    const { handleFeedback } = useContext(Context)

    
    const handleClickBackToProfile = event => {
        event.preventDefault()
        props.onClickedBackToProfile()
    }



    return <div className="Logout Container">
        <form className="Container " onSubmit={handleSaveNameClick}>
            <button className="Button Button__Day__Flecha" onClick={handleClickBackToProfile}>atrás</button>
            <p>LOGOUT</p>
            <button className="Button__Save">Save</button>
        </form>
    </div>
}

export default Logout