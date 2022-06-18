import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../Context'
import '../../styles/List.sass'
import Map from './Map'
import createActivity from '../../logic/createActivity'
import addPointToActivity from '../../logic/addPointToActivity'

function ActivityStart(props) {

    const [sport, setSport] = useState(null)
    const [position, setPosition] = useState(null)
    const { handleFeedback } = useContext(Context)
    const navigate = useNavigate()
    

    useEffect(() => {
        setSport('Cycling')

        getPosition()
    }, [])
    
    
    const getPosition = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setPosition([position.coords.latitude, position.coords.longitude, position.coords.altitude])
            console.log('set first position')
            watchPosition()
        }, function(error){
            handleFeedback({ type: 'error', message: 'Position error' })
        }, { maximumAge: 400_000 })
    }

    const watchPosition = () => {
        navigator.geolocation.watchPosition(function(position) {
            setPosition([position.coords.latitude, position.coords.longitude, position.coords.altitude])
            console.log('set position')
        }, function(error){
            handleFeedback({ type: 'error', message: 'Position error' })
        }, { enableHighAccuracy: true, distanceFilter: 10,  maximumAge: 400_000 })    
    }    
    


    const handleCloseClick = () => navigate('/dashboard')
    
    const handleBikeClick = () => {
        setSport('Cycling') 
        document.getElementById("bike").classList.add('Button__selected') 
        document.getElementById("hike").classList.remove('Button__selected')
        document.getElementById("sky").classList.remove('Button__selected')
        document.getElementById("snow").classList.remove('Button__selected') }
    const handleHikingClick = () => {
        setSport('Hiking')
        document.getElementById("hike").classList.add('Button__selected') 
        document.getElementById("sky").classList.remove('Button__selected')
        document.getElementById("snow").classList.remove('Button__selected')
        document.getElementById("bike").classList.remove('Button__selected') }
    const handleSkiClick = () => {
        setSport('Skiing')
        document.getElementById("sky").classList.add('Button__selected') 
        document.getElementById("snow").classList.remove('Button__selected')
        document.getElementById("hike").classList.remove('Button__selected')
        document.getElementById("bike").classList.remove('Button__selected') }
    const handleSnowClick = () => {
        setSport('Snowshoeing')
        document.getElementById("snow").classList.add('Button__selected') 
        document.getElementById("hike").classList.remove('Button__selected')
        document.getElementById("sky").classList.remove('Button__selected')
        document.getElementById("bike").classList.remove('Button__selected') }
    

    const handleStartClick = async() => {
        try {
            const token = sessionStorage.token
            const activityId = await createActivity(token, sport)
            await addPointToActivity(activityId, position)
            
            props.onStartClicked(activityId)
        } catch (error) {
            handleFeedback({ type: 'error', message: error.message })
        }   
    }
    

    return  <div className="Container Overflow mw mh">
        <header className="Header">
            <button className="Button__back" onClick={handleCloseClick}>Close</button>
            <h1 className="Center">{sport}</h1>
        </header>


        <main className="Home__body mw mh">
            { position && <Map position={[position[0], position[1]]} center={false}/> } 
        </main>

        
        <footer className="Footer Footer__activity">
            <div className="Footer__home">
                <button id="bike" className="Button__selected Footer__icon material-symbols-outlined" onClick={handleBikeClick}>directions_bike</button>
                <button id="hike" className="Footer__icon material-symbols-outlined" onClick={handleHikingClick}>hiking</button>
                <button id="sky" className="Footer__icon material-symbols-outlined" onClick={handleSkiClick}>downhill_skiing</button>
                <button id="snow" className="Footer__icon material-symbols-outlined" onClick={handleSnowClick}>snowshoeing</button>
            </div>

            <button className="Button__start" onClick={handleStartClick}>Start</button>         
        </footer>

    </div> 
}

export default ActivityStart