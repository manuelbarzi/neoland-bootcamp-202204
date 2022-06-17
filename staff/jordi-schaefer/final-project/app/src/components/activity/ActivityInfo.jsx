import { useState, useEffect, useContext } from 'react'
import Context from '../Context'
import retrieveActivity from '../../logic/retrieveActivity'
import calculateTotalDistance from '../../logic/calculateTotalDistance'
import Timer from './Timer'

function ActivityInfo({activityId, onPointRegistered}) {

    const [ activity, setActivity ] = useState(0)
    const [ totalDistance, setTotalDistance ] = useState(0)
    const [ altitude, setAltitude ] = useState(0)
    const [ caltitude, setCAltitude ] = useState(0)
    const [ initialTime, setInitialTime ] = useState(null)
    const { handleFeedback } = useContext(Context)


    useEffect(()=>{
        getActivity()
    },[onPointRegistered])

    const getActivity = async() => {
        try {
            const activity = await retrieveActivity(sessionStorage.token, activityId)    
            setActivity(activity)
    
            const initialTime = new Date()-activity.date
            const h = new Date(initialTime).getHours()-1
            const m = new Date(initialTime).getMinutes()
            const s = new Date(initialTime).getSeconds()
            setInitialTime({h,m,s})

            setTotalDistance(calculateTotalDistance(activity.points))
            setAltitude(activity.points[activity.points.length-1].altitude-activity.points[0].altitude)
            setCAltitude(activity.points[activity.points.length-1].altitude)
            
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }


    return (<div>

        {initialTime && <Timer initialTime={initialTime}/> }
        {activity && <h2>Points registered: {activity.points.length}</h2>}
        {activity && <h2>Total distance: {totalDistance} km</h2>}
        {activity && <h2>Start-current altitude: {altitude} m</h2>}
        {activity && <h2>Current altitude: {caltitude} m</h2>}
    </div>
    )
}

export default ActivityInfo

