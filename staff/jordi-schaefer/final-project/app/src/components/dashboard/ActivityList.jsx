import { useState, useEffect, useContext } from 'react'
import Context from '../Context'
import retrieveActivities from '../../logic/retrieveActivities'
import retrieveUserActivities from '../../logic/retrieveUserActivities'
import Activity from './Activity'
import ProfileInfoHeader from './ProfileInfoHeader'


function ActivityList(props) { 

    const { handleFeedback } = useContext(Context)

    const [activities, setActivities] = useState(null)
    const [timestamp, setTimestamp] = useState(null)

    // si se monta el componente, ejecuta esto
    useEffect(() => {
        loadActivities()
    }, [timestamp]) // si pongo un array vacio ejecutara esto la primera vez, cuando carga el componente
    // al ponerle las props, tambien ejecutara cuando cambien las props


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
        <ul className = "List__activities mw Overflow" >
            {props.private && activities && <li className="Li__activity">
                    <ProfileInfoHeader activities={activities}/>
                </li>}

            {activities.map(activitie => <li className="Li__activity" key={activitie.id} >  
                <Activity activity={activitie} onLikeClicked={handleActivityLikeClicked} onCommentClicked={props.onCommentClicked}/>
            </li>)}
        </ul>
}

export default ActivityList