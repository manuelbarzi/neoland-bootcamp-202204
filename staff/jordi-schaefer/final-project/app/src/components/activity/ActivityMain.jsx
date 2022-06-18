import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isJwtValid } from 'validators'
import ActivityStart from './ActivityStart'
import ActivityRecord from './ActivityRecord'
import ActivityFinish from './ActivityFinish'


function ActivityMain() {

    const [view, setView] = useState('start')
    const [point, setPoint] = useState([])
    const [activityId, setActivityId] = useState(null)
    const navigate = useNavigate()
    

    useEffect(() => {
        if (isJwtValid(sessionStorage.token)) {
            return
        } else navigate('/') 
    }, [])


    const handleStartClicked = (activityId, position) => {
        setActivityId(activityId)
        setPoint(position)
        setView('record')
    }
    const handleFinishClicked = () => {
        setView('finish') 
    } 
    

    return  isJwtValid(sessionStorage.token) ?

        <div className="Container overflow mw mh">
            { view === 'start' &&   <ActivityStart onStartClicked={handleStartClicked}/> }
            { view === 'record' &&   <ActivityRecord activityId={activityId} point={point} onFinishClicked={handleFinishClicked}/> }
            { view === 'finish' &&   <ActivityFinish activityId={activityId} /> }
        </div> : <></>
}

export default ActivityMain