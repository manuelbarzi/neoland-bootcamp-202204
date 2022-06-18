import { useContext } from 'react'
import Context from '../Context'
import deleteActivity from '../../logic/deleteActivity'
import toggleLikeActivity from '../../logic/toggleLikeActivity'
import MapView from './MapView'
import calculateActivityData from '../../logic/calculateActivityData'
import '../../styles/ActivityItem.sass'

function Activity (props) {
    
    const { handleFeedback } = useContext(Context)
    const { activity, setDelete, onRemove, onLikeClicked } = props

    
    const handleDeleteClick = async() => {
        const activityId= activity.id
        try {
            await deleteActivity(sessionStorage.token, activityId) 
            onRemove(activityId)
            handleFeedback({ type: 'success', message: 'Sticker deleted'})
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }

    const handleLikeClick = async() => {
        try {
            await toggleLikeActivity(sessionStorage.token, activity.id)
            onLikeClicked()
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }
    
    const handleCommentClick = () => {
        props.onCommentClicked(activity.id)
    }
    
    const { likes: { length : likes }, comments: { length : comments }, date, title, user, points } = activity
    const data = calculateActivityData(points)

    const timeOptions = {hour:'numeric', minute:'numeric' , day:'numeric', month:'numeric', year:'numeric'  }
    
    return <div>
        <div className="Activity__header">
            <h2>{user.name}</h2>
            <h2>{date.toLocaleDateString("es-ES", timeOptions)}</h2>
            <h2>{title}</h2>
            <h2>Altitude: {data.altitude} m</h2>
            <h2>Time: {data.time}</h2>
            <h2>Distance: {data.distance} Km</h2>
        </div>

        { setDelete && <div className='Container'> 
            <button className="Activity__button--delete" onClick={handleDeleteClick}>Delete</button> 
        </div> }

        { !setDelete && points.length>0 && <div className='Activity__container--map'>
            <MapView points={points}/>
        </div> }

        { !setDelete && <div className='Activity__footer mw'>
            <div className='Activity__footer--container Button__borderR'>
                { likes>0 && <h2 className='Activity__footer--number'>{likes}</h2> }
                <button className='Activity__footer--button material-symbols-outlined' onClick={handleLikeClick}>thumb_up</button>
            </div>
            <div className='Activity__footer--container'>
                { comments>0 && <h2 className='Activity__footer--number'>{comments}</h2> }
                <button className='Activity__footer--button material-symbols-outlined' onClick={handleCommentClick}>chat</button>
            </div>
        </div> }

    </div>
}

export default Activity