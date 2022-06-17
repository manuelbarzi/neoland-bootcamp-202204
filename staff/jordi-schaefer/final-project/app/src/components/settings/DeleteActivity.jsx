import { useState, useEffect, useContext } from 'react'
import Context from '../Context'
import retrieveUserActivities from '../../logic/retrieveUserActivities'
import Activity from '../dashboard/Activity'
// sin useEffect tambien funciona
// useEffect maneja los ciclos de vida de comando

function DeleteActivity({ timestamp }) { // timestamp son las props desestructuradas

    const { handleFeedback } = useContext(Context)

    const [activities, setActivities] = useState(null)


    // si se monta el componente, ejecuta esto
    useEffect(() => {
        loadActivities()
    }, [timestamp]) // si pongo un array vacio ejecutara esto la primera vez, cuando carga el componente
    // al ponerle las props, tambien ejecutara cuando cambien las props


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