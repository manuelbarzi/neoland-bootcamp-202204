import { useState, useEffect, useContext } from 'react'
import Context from '../Context'
import retrieveActivities from '../../logic/retrieveActivities'
import retrieveUserActivities from '../../logic/retrieveUserActivities'
import ActivityItem from './ActivityItem'
import ProfileInfoHeader from './ProfileInfoHeader'
import '../../styles/ActivityList.sass'

function ActivityList(props) { 

    const { handleFeedback } = useContext(Context)
    const [activities, setActivities] = useState(null)
    const [timestamp, setTimestamp] = useState(null)


    useEffect(() => {
        loadActivities()
    }, [timestamp])


    const loadActivities = async() => {
        try {
            let activities
            
            if(props.private){
                activities = await retrieveUserActivities(sessionStorage.token)
            }
            else activities = await retrieveActivities(sessionStorage.token)
            setActivities(activities) 
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }

    const handleActivityLikeClicked = () => setTimestamp(Date.now())

    return activities &&
        <ul className = "Activities__list mw overflow" >
            {props.private && activities && <li className="Activity__list--item">
                    <ProfileInfoHeader activities={activities}/>
                </li>}

            {activities.map(activitie => <li className="Activity__list--item" key={activitie.id} >  
                <ActivityItem activity={activitie} onLikeClicked={handleActivityLikeClicked} onCommentClicked={props.onCommentClicked}/>
            </li>)}
        </ul>
}

export default ActivityList