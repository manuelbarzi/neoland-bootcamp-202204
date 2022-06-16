import { useState, useEffect, useContext } from 'react'
import Context from '../Context'
import retrieveActivities from '../../logic/retrieveActivities'
import Activity from './Activity'
// sin useEffect tambien funciona
// useEffect maneja los ciclos de vida de comando

function ActivityList(props) { // timestamp son las props desestructuradas

    const { handleFeedback } = useContext(Context)

    const [activities, setActivities] = useState(null)
    const [timestamp, setTimestamp] = useState(null)


    // si se monta el componente, ejecuta esto
    useEffect(() => {
        loadActivities()
        console.log('useEffect')
    }, [timestamp]) // si pongo un array vacio ejecutara esto la primera vez, cuando carga el componente
    // al ponerle las props, tambien ejecutara cuando cambien las props


    const loadActivities = () => {
        try {
            retrieveActivities(sessionStorage.token, (error, activities) => {
                if (error) {
                    handleFeedback({ type: 'error', message: error.message})
                    return
                }
                setActivities(activities) 
            })
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }

    const handleActivityLikeClicked = () => setTimestamp(Date.now())

    return activities &&
        <ul className = "List__activities mw Overflow" >
            {activities.map(activitie => <li className="Li__activity" key={activitie.id} >  
                <Activity activity={activitie} onLikeClicked={handleActivityLikeClicked} onCommentClicked={props.onCommentClicked}/>
            </li>)}
        </ul>
}

export default ActivityList