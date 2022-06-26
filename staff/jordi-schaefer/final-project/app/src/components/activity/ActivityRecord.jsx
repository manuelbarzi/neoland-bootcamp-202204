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
    const [unlock, setUnlock] = useState(0)
    const [hide, setHide] = useState(false)
    const [activated, setActivated] = useState(false)
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
            if(activated) {
                handleSaveClick()
            }
            //navigator.geolocation.clearWatch(watchId)
        }, function(error){
            handleFeedback({ type: 'error', message: 'Position error' })
        }, { enableHighAccuracy: true, distanceFilter: 10,  maximumAge: 8_000 })
    }

    const handleSaveClick = async() => {
        try {
            if(position) {
                await addPointToActivity(sessionStorage.token, props.activityId, position)
                handleFeedback({ type: 'success', message: 'Point saved!' })
                setPoints(points => [...points, 
                    position])
                setTimestamp(Date.now())
            }
            else handleFeedback({ type: 'error', message: 'Position not found' })
        } catch (error) {
            handleFeedback({ type: 'error', message: error.message })
        }  
    }

    const handleFinishClick = async() => {
        try {
            if(position) {
                await addPointToActivity(sessionStorage.token, props.activityId, position)
                props.onFinishClicked()
            }
            else handleFeedback({ type: 'error', message: 'Position not found' })
        } catch (error) {
            handleFeedback({ type: 'error', message: error.message })
        } 
    }

    const handleTimeClick = () => setView('timer')
    const handleMapClick = () => setView('map')


    /* ------ turbo mode for developer ------- */
    const handleDevelopClick = () => {
        setUnlock(unlock+1)
        if (unlock === 5) setHide(true)
        else if (unlock > 5) { setHide(false); setActivated(false); setUnlock(0) }
    }
    
    const handleTurboClick = () => {
        if(activated) {
            document.getElementById('dev').classList.remove('dev-activated')
            setActivated(false) }
        else {
            document.getElementById('dev').classList.add('dev-activated')
            setActivated(true) }
    }
    /* ------   ------------   ------- */



    return  <div className="Container overflow mw mh">
    
    <button className="Activity__button-hide" onClick={handleDevelopClick}></button>
    {hide && <button id='dev' className="Activity__button-dev material-symbols-outlined" onClick={handleTurboClick}>offline_bolt</button>}

    <main className="Activity__body mw mh">
        { view === 'map' && position && points && <Map position={position} center={true} points={points}/> } 
        { view === 'timer' && <LiveInfo activityId={props.activityId} onPointRegistered={timestamp}/> } 
    </main>

 
    <footer className="Activity__footer-record mw"> 
        <button className="Activity__footerButton__selector material-symbols-outlined" onClick={handleTimeClick}>Timer</button>
        <button className="Activity__button--register" onClick={handleSaveClick}>RECORD</button>    
        <button className="Activity__button--start" onClick={handleFinishClick}>FINISH</button>      
        <button className="Activity__footerButton__selector material-symbols-outlined" onClick={handleMapClick}>Pin_drop</button>
    </footer>

    </div>
}

export default ActivityRecord