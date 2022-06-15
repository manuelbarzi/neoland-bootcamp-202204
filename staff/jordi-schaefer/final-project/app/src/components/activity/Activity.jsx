import { useState, useEffect, useContext, componentDidMount, componentWillUnmount } from 'react'
import Context from '../Context'
import '../../styles/List.sass'
import { useNavigate } from 'react-router-dom'
import { isJwtValid } from '../../validators'
import ActivityStart from './ActivityStart'
import ActivityRecord from './ActivityRecord'
import ActivityFinish from './ActivityFinish'


function Activity() {

    const [view, setView] = useState('start')
    const [activityId, setActivityId] = useState(null)
    const { handleFeedback } = useContext(Context) // quiero usar del contexto el handleFeedback, "traeme el value y destructurame esto"
    const navigate = useNavigate()
    

    useEffect(() => {
        if (isJwtValid(sessionStorage.token)) {
            return
        } else navigate('/') 
    }, [])


    const handleStartClicked = (activityId) => {
        setActivityId(activityId)
        setView('record')
    }
    const handleFinishClicked = () => {
        setView('finish') 
    } 
    

    return  isJwtValid(sessionStorage.token) ?

        <div className="Container Overflow mw mh">
            { view === 'start' &&   <ActivityStart onStartClicked={handleStartClicked}/> }
            { view === 'record' &&   <ActivityRecord activityId={activityId} onFinishClicked={handleFinishClicked}/> }
            { view === 'finish' &&   <ActivityFinish activityId={activityId} /> }
        </div> : <></>
}

export default Activity