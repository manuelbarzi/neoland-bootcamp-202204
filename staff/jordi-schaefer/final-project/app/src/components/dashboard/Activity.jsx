import { useContext } from 'react'
import Context from '../Context'
import deleteActivity from '../../logic/deleteActivity'
import toggleLikeActivity from '../../logic/toggleLikeActivity'
import MapView from './MapView'
import '../../styles/BoxHeader.sass'
import calculateTotalDistance from '../../logic/calculateTotalDistance'

function Activity (props) {
    
    const { handleFeedback } = useContext(Context)
    const { activity, setDelete, onRemove, onLikeClicked } = props

    
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
    const totalAlt = points[points.length-1].altitude-points[0].altitude
    const seconds = (points[points.length-1].date.getTime() - points[0].date.getTime()) / 1000; // calculate the ssecond between start and end
    const totalTime = new Date(seconds * 1000).toISOString().substring(14, 19) // convert the senconds to time (hours,minutes)
    const distance = calculateTotalDistance(points)/1000  // calculade the distance between all the points and convert to km
    
    const options = {hour:'numeric', minute:'numeric' , day:'numeric', month:'numeric', year:'numeric'  }
    
    return <div className='BoxHeader'>
        <div className="Header__activity">
            <h2>{user.name}</h2>
            <h2>{date.toLocaleDateString("es-ES", options)}</h2>
            <h2>{title}</h2>
            <h2>Altitude: {totalAlt}</h2>
            <h2>Time: {totalTime}</h2>
            <h2>Distance: {distance} Km</h2>
        </div>

        { setDelete && <div className='Container'> 
            <button className="Button__color Button__delete" onClick={handleDeleteClick}>Delete</button> 
        </div> }

        { !setDelete && points.length>0 && <div className='BoxHeader__map'>
            <MapView points={points}/>
        </div> }

        { !setDelete && <div className='Box__footer mw'>
            <div className='Box__buttonFooter Button__borderR'>
                { likes>0 && <h2 className='Likes__number'>{likes}</h2> }
                <button className='Button__footer material-symbols-outlined' onClick={handleLikeClick}>thumb_up</button>
            </div>
            <div className='Box__buttonFooter'>
                { comments>0 && <h2 className='Likes__number'>{comments}</h2> }
                <button className='Button__footer material-symbols-outlined' onClick={handleCommentClick}>chat</button>
            </div>
        </div> }

    </div>
}

export default Activity