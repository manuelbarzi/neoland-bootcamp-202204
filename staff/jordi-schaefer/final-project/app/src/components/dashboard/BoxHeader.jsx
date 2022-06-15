import { useContext } from 'react'
import Context from '../Context'
import deleteActivity from '../../logic/deleteActivity'
import MapView from './MapView'
import '../../styles/BoxHeader.sass'

function BoxHeader (props) {
    
    const { handleFeedback } = useContext(Context)
    const { activity, setDelete, onRemove } = props
    
    var options = {hour:'numeric', minute:'numeric' , day:'numeric', month:'numeric', year:'numeric'  };
    const date = new Date(props.activity.date)


    const handleDeleteClick = async() => {
        const activityId= activity.id

        if (activityId) {
            try {
                await deleteActivity(sessionStorage.token, activityId)
                   
                onRemove(activityId)
                handleFeedback({ type: 'success', message: 'Sticker deleted'})
            } catch(error) {
                handleFeedback({ type: 'error', message: error.message})
            }
        }
    }

    

    return <div className='BoxHeader'>
        <div className="Header__activity">
            <h2>{props.activity.user.name}</h2>
            <h2>{date.toLocaleDateString("es-ES", options)}</h2>
            <h2>{props.activity.title}</h2>
        </div>

        { setDelete && <div className='Container'> 
            <button className="Button__color Button__delete" onClick={handleDeleteClick}>Delete</button> 
        </div> }

        { !setDelete && <div className='BoxHeader__map'>
            <MapView points={props.activity.points}/>
        </div> }

        { !setDelete && <div className='Box__footer mw'>
            <button className='Button__footer Button__borderR'>like</button>
            <button className='Button__footer'>comment</button>
        </div> }

    </div>
}

export default BoxHeader