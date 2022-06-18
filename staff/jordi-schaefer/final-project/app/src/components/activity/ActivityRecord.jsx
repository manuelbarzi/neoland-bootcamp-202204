import { useState, useEffect, useContext } from 'react'
import Context from '../Context'
import '../../styles/List.sass'
import Map from './Map'
import LiveInfo from './LiveInfo'
import addPointToActivity from '../../logic/addPointToActivity'


function ActivityRecord(props) {

    const [timestamp, setTimestamp] = useState(null)
    const [position, setPosition] = useState(null)
    const [view, setView] = useState('map')
    const { handleFeedback } = useContext(Context)


    useEffect(() => {
        watchPosition()
    }, [])


    const watchPosition = () => {
        navigator.geolocation.watchPosition(function(position) {
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
            setTimestamp(Date.now())
        } catch (error) {
            handleFeedback({ type: 'error', message: error.message })
        }  
    }

    const handleFinishClick = async() => {
        try {
            await addPointToActivity(props.activityId, position)
            props.onFinishClicked()
        } catch (error) {
            handleFeedback({ type: 'error', message: error.message })
        } 
    }

    const handleTimeClick = () => setView('timer')
    const handleMapClick = () => setView('map')



    return  <div className="Container Overflow mw mh">
    <header className="Header">
        <h1 className="Center"></h1>
    </header>


    <main className="Home__body mw mh">
        { view === 'map' && position && <Map position={position} center={true}/> } 
        { view === 'timer' && <LiveInfo activityId={props.activityId} onPointRegistered={timestamp}/> } 
    </main>

    
    <footer className="Footer Footer__activity">
        <div className="Footer__home">
            <button className="b" onClick={handleTimeClick}>Time</button>
            <button className="b" onClick={handleMapClick}>Map</button>
        </div> 
        <div className="Footer__buttons">
            <button className="Button__start Button__register" onClick={handleSaveClick}>Register</button>    
            <button className="Button__start" onClick={handleFinishClick}>Finish</button>      
        </div>
    </footer>

    </div>
}

export default ActivityRecord