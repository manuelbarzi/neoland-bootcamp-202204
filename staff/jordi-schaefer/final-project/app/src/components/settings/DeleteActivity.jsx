import { useState, useEffect, useContext } from 'react'
import Context from '../Context'
import retrieveUserActivities from '../../logic/retrieveUserActivities'
import Activity from '../dashboard/Activity'

function DeleteActivity({ timestamp }) {

    const { handleFeedback } = useContext(Context)
    const [activities, setActivities] = useState(null)


    useEffect(() => {
        loadActivities()
    }, [timestamp])

    const loadActivities = async() => {
        try {
            const activities =  await retrieveUserActivities(sessionStorage.token)
            setActivities(activities)
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }

    const handleRemoveActivity = activityId => {
        const _activities = activities.filter( activity => activity.id !== activityId)
        setActivities(_activities)
    }


    return activities && activities.length ?
        <ul className = "List__activities mw Overflow" >
            {activities.map(activitie => <li className="mw" key={activitie.id} >  
                <Activity activity={activitie} setDelete={true} onRemove={handleRemoveActivity}/>
            </li>)}
        </ul>
        : 
        <div className="Container Padding">
            <p> No activities yet </p>
        </div>
}

export default DeleteActivity