import { useState, useEffect, useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import retrieveUser from '../logic/retrieveUser'
import saveEvent from '../logic/saveEvent'
import EventList from './EventList'
import Profile from './Profile'
import './Home.sass'
import { MdHome, MdAddCircle, MdOutlineCalendarToday, MdLogout,MdSearch } from "react-icons/md"


function Home(props) {
    const logger = new Logger('Home')

    logger.info('call')

    const [name, setName] = useState(null)
    const [timestamp, setTimestamp] = useState(null)
    const [view, setView] = useState(null)
    const { handleFeedback } = useContext(Context)

    const handleLogoutClick = () => {
        handleLogout()
    }

    const handleLogout = () => {
        delete sessionStorage.token

        props.onUserLoggedOut()
    }

    useEffect(() => {
        logger.info('componentDidMount')

        retrieveUser(sessionStorage.token, (error, user) => {
            if (error) {
                handleFeedback({ level: 'error', message: error.message })

                handleLogout()

                return
            }
            setName(user.name)

        })
    }, [])
debugger
    const handleAddClick = () => {
        saveEvent(sessionStorage.token,null, null, null, error => {
            if (error) {
                handleFeedback({ level: 'error', message: error.message })

                return
            }

            setTimestamp(Date.now())
        })
    }
    const handleProfileClick = () => setView('profile')

    const handleHomeClick = () => setView('list')

    logger.info('render')

    return <div className="Home Container">
        <header className="Home__header Container Container--row Container--spread-sides">
            <div className='Header__nav'>
                <button onClick={handleLogoutClick}>< MdSearch/></button>
                <button onClick={handleLogoutClick}><MdLogout /></button>
            </div>
        </header> 

        <main className="Home__body Container">
            {view === 'list' && <EventList timestamp={timestamp} />}
            {view === 'profile' && <Profile />}
        </main>

        <footer className="Home__footer Container">
            <nav className='nav'>

                <a href="#" onClick={handleHomeClick}><MdHome className="icons" /></a>
                <a href="#" onClick={handleAddClick}><MdAddCircle className="icons" /></a>
                <a href="#" onClick={handleLogoutClick}><MdOutlineCalendarToday className="icons" /></a>
                <a href="#" onClick={handleProfileClick}>{name}</a>
            </nav>

        </footer>
    </div>
}

export default Home

//   <a href="#" onClick={handleLoginLinkClick}>Login</a>

/* <a href="#" className="material-symbols-outlined" onClick={handleAddClick}>add_circle</a>
                <a href="#" className="material-symbols-outlined" onClick={handleLogoutClick}>calendar_month</a>
                <a href="#" className="material-symbols-outlined" onClick={handleProfileClick}>person</a>
 */
