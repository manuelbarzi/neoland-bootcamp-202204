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
        <div className="ActivityItem__header">
            <div className={"Header__container--name"}> 
                <h2 className={"Header__name"}>{user.name}</h2>
                <div className={"Header__container--date"}>
                    {activity.sport === "Cycling" && <span className="Header__icon Activity__footer--icon material-symbols-outlined" >directions_bike</span>}
                    {activity.sport === "Hiking" && <span className="Header__icon Activity__footer--icon material-symbols-outlined" >hiking</span>}
                    {activity.sport === "Skiing" && <span className="Header__icon Activity__footer--icon material-symbols-outlined" >downhill_skiing</span>}
                    {activity.sport === "Snowshoeing" && <span className="Header__icon Activity__footer--icon material-symbols-outlined"  >snowshoeing</span>}
                    <h2 className={"Header__date"}>{date.toLocaleDateString("es-ES", timeOptions)}</h2>
                </div>
                <h2 className={"Header__title"}>{title}</h2>
            </div>
            <div className={"Header__container--data"}>   
                <div className={"Header__data"}>  
                    <h2 className={"Header__data--name"}>Distance</h2>
                    <h2 className={"Header__data--value"}>{data.distance} Km</h2>
                </div>            
                <div className={"Header__data"}>  
                    <h2 className={"Header__data--name"}>Altitude</h2>
                    <h2 className={"Header__data--value"}>{data.altitude} m</h2>
                </div>            
                <div className={"Header__data"}>  
                    <h2 className={"Header__data--name"}>Time</h2>
                    <h2 className={"Header__data--value"}>{data.time}</h2>
                </div>            
            </div>
        </div>

        { setDelete && <div className='Container'> 
            <button className="ActivityItem__button--delete" onClick={handleDeleteClick}>Delete</button> 
        </div> }

        { !setDelete && points.length>0 && <div className='ActivityItem__container--map'>
            <MapView points={points}/>
        </div> }

        { !setDelete && <div className='ActivityItem__footer mw'>
            <div className='ActivityItem__footer--container Button__borderR'>
                { likes>0 && <h2 className='ActivityItem__footer--number'>{likes}</h2> }
                <button className='ActivityItem__footer--button material-symbols-outlined' onClick={handleLikeClick}>thumb_up</button>
            </div>
            <div className='ActivityItem__footer--container'>
                { comments>0 && <h2 className='ActivityItem__footer--number'>{comments}</h2> }
                <button className='ActivityItem__footer--button material-symbols-outlined' onClick={handleCommentClick}>chat</button>
            </div>
        </div> }

    </div>
}

export default Activity