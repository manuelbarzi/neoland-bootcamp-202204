import { useState, useEffect, useContext } from 'react'
import Context from '../Context'
import Map from './Map'
import LiveInfo from './LiveInfo'
import addPointToActivity from '../../logic/addPointToActivity'
import retrieveActivity from '../../logic/retrieveActivity'

function ActivityRecord(props) {

    const [timestamp, setTimestamp] = useState(null)
    const [position, setPosition] = useState(null)
    const [points, setPoints] = useState(null)
    const [view, setView] = useState('map')
    const { handleFeedback } = useContext(Context)
    let watchId

    
    useEffect(() => {
        watchPosition()
        if(props.point) {
            setPoints([props.point])
        }
        else {
            resumeActivity()
        }
    }, [])

    const resumeActivity = async() => {
        try {
            const activity = await retrieveActivity(sessionStorage.token, props.activityId)
            setPoints([])
            activity.points.forEach(point =>{ 
                setPoints(points => [...points, 
                    [point.latitude, point.longitude]])
            })
        } catch (error) {
            handleFeedback({ type: 'error', message: error.message })
        } 
    }

    const watchPosition = () => {
        watchId = navigator.geolocation.watchPosition(function(position) {
            setPosition([position.coords.latitude, position.coords.longitude, position.coords.altitude])
            console.log('set position')
        }, function(error){
            handleFeedback({ type: 'error', message: 'Position error' })
        }, { enableHighAccuracy: true, distanceFilter: 10,  maximumAge: 400_000 })
    }


    const handleSaveClick = async() => {
        try {
            await addPointToActivity(props.activityId, position)
            handleFeedback({ type: 'success', message: 'New point saved!' })
            setPoints(points => [...points, 
                position])
            setTimestamp(Date.now())
        } catch (error) {
            handleFeedback({ type: 'error', message: error.message })
        }  
    }

    const handleFinishClick = async() => {
        try {
            await addPointToActivity(props.activityId, position)
            navigator.geolocation.clearWatch(watchId)
            props.onFinishClicked()
        } catch (error) {
            handleFeedback({ type: 'error', message: error.message })
        } 
    }

    const handleTimeClick = () => setView('timer')
    const handleMapClick = () => setView('map')



    return  <div className="Container overflow mw mh">

    <main className="Activity__body mw mh">
        { view === 'map' && position && points && <Map position={position} center={true} points={points}/> } 
        { view === 'timer' && <LiveInfo activityId={props.activityId} onPointRegistered={timestamp}/> } 
    </main>

 
    <footer className="Activity__footer mw">
        <div className="Activity__footerContainer__selector mw">
            <button className="Activity__footerButton__selector material-symbols-outlined" onClick={handleTimeClick}>Timer</button>
            <button className="Activity__footerButton__selector material-symbols-outlined" onClick={handleMapClick}>Pin_drop</button>
        </div> 
        <div className="Activity__footerContainer__buttons">
            <button className="Activity__button--register" onClick={handleSaveClick}>RECORD</button>    
            <button className="Activity__button--start" onClick={handleFinishClick}>FINISH</button>      
        </div>
    </footer>

    </div>
}

export default ActivityRecord