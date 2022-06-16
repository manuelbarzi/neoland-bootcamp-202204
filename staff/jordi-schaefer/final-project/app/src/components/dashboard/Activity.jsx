import { useContext, useState, useEffect } from 'react'
import Context from '../Context'
import deleteActivity from '../../logic/deleteActivity'
import toggleLikeActivity from '../../logic/toggleLikeActivity'
import MapView from './MapView'
import '../../styles/BoxHeader.sass'

function Activity (props) {
    
    const { handleFeedback } = useContext(Context)
    const { activity, setDelete, onRemove, onLikeClicked } = props
    const [ likes, setLikes ] = useState(null)
    
    var options = {hour:'numeric', minute:'numeric' , day:'numeric', month:'numeric', year:'numeric'  };
    const date = new Date(props.activity.date)

    useEffect(() => {
        setLikes(props.activity.likes.length)
    }, []) 


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

            handleFeedback({ type: 'success', message: 'Liked!'})
            onLikeClicked()
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }

    const handleCommentClick = () => {
        props.onCommentClicked(activity.id)
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
            <div className='Box__buttonFooter Button__borderR'>
                { likes>0 && <h2 className='Likes__number'>{likes}</h2> }
                <button className='Button__footer material-symbols-outlined' onClick={handleLikeClick}>thumb_up</button>
            </div>
            <div className='Box__buttonFooter'>
            <button className='Button__footer material-symbols-outlined' onClick={handleCommentClick}>chat</button>
            </div>
        </div> }

    </div>
}

export default Activity