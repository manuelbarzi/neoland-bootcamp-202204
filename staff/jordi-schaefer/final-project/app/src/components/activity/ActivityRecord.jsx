import { useState, useEffect, useContext } from 'react'
import Context from '../Context'
import '../../styles/List.sass'
import Map from './Map'
import addPointToActivity from '../../logic/addPointToActivity'


function ActivityRecord(props) {

    const [position, setPosition] = useState(null)
    const { handleFeedback } = useContext(Context) // quiero usar del contexto el handleFeedback, "traeme el value y destructurame esto"


    useEffect(() => {
        refreshLocation()

        const interval = setInterval(() => {
            refreshLocation()
        }, 4000);
        
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])

    const refreshLocation = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setPosition([position.coords.latitude, position.coords.longitude, position.coords.altitude])
            console.log('set position')
        })

    }



    const handleSaveClick = async() => {
        try {
            await addPointToActivity(props.activityId, position)
            handleFeedback({ type: 'success', message: 'New point saved!' })
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


    const handleTimeClick = () => {

    }

    const handleMapClick = () => {

    }

    


    return  <div className="Container Overflow mw mh">
    <header className="Header">
        <h1 className="Center"></h1>
    </header>


    <main className="Home__body mw mh">
        { position && <Map position={position} center={true}/> } 
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