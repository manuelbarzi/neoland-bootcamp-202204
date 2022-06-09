import { useState, useEffect, useContext, componentDidMount, componentWillUnmount } from 'react'
import Logger from '../vendor/Logger'
import Context from './Context'
//import retrieveUser from '../logic/retrieveUser'
//import retrieveNotes from '../logic/retrieveNotes'
import '../styles/List.sass'
import { useNavigate } from 'react-router-dom'
import { isJwtValid } from '../validators'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


function Activity() {

    const logger = new Logger('Home')
    logger.info('call')

    const [view, setView] = useState(null)
    const [sport, setSport] = useState(null)
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)
    const { handleFeedback } = useContext(Context) // quiero usar del contexto el handleFeedback, "traeme el value y destructurame esto"
    const navigate = useNavigate()
    


    useEffect(() => {
        refreshLocation()
        /*         logger.info('useEffect')

        if (isJwtValid(sessionStorage.token)) {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    handleFeedback({ type: 'error', message: error.message})
                    handleLogoutClick()
                    return
                }
                setName(user.name)  */
                setView('Start')
                setSport('Cycling')

         /*            })
            //loadNotes()
        } else navigate('/') */
        const interval = setInterval(() => {
            refreshLocation()
        }, 4000);
        
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])




    const refreshLocation = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude)
            setLon(position.coords.longitude)
            console.log('set position')
        })

    }



    const handleCloseClick = () => {
        navigate('/dashboard')
    }

    const handleStartClick = () => {
        refreshLocation()
    }


    const handleBikeClick = () => {setSport('Cycling'); }
    const handleHikingClick = () => {setSport('Hiking'); }
    const handleSkiClick = () => {setSport('Skiing'); }
    const handleSnowClick = () => {setSport('Snowshoeing'); }

    

    // isJwtValid(sessionStorage.token) ?
    // : <></>
    return  <div className="Container Overflow mw mh">
        <header className="Header">
            { view === 'Start' && <button className="Button__back" onClick={handleCloseClick}>Close</button>}
            <h1 className="Center">{sport}</h1>
        </header>


        <main className="Home__body mw mh">
            { lat && lon && <MapContainer 
                style={{width: '100%', height: '100%'}} 
                center={[lat, lon]} 
                zoom={15} 
                zoomControl={false}
                scrollWheelZoom={false}
                attributionControl={false}
                >
                <TileLayer
                attribution=' <a href="https://www.openstreetmap.org/copyright"></a> '
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lon]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer> }
        </main>


        
        <footer className="Footer Footer__activity">
            <div className="Footer__home">
                <button id="bike" className="Button__selected Footer__icon material-symbols-outlined" onClick={handleBikeClick}>directions_bike</button>
                <button id="hike" className="Footer__icon material-symbols-outlined" onClick={handleHikingClick}>hiking</button>
                <button id="sky" className="Footer__icon material-symbols-outlined" onClick={handleSkiClick}>downhill_skiing</button>
                <button id="profile" className="Footer__icon material-symbols-outlined" onClick={handleSnowClick}>snowshoeing</button>
            </div>

            <button className="Button__start" onClick={handleStartClick}>Start</button>         
        </footer>

    </div> 
}

export default Activity