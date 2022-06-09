import { useState, useEffect, useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import retrieveUser from '../logic/retrieveUser'
import saveEvent from '../logic/saveEvent'
import EventList from './EventList'
import Profile from './Profile'
import './Home.sass'


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

    const handleAddClick = () => {
        saveEvent(sessionStorage.token, null, null, null, error => {
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
            <div className='header__nav'>
                <button className="material-symbols-outlined" onClick={handleLogoutClick}>search</button>
                <button className="material-symbols-outlined" onClick={handleLogoutClick}>logout</button>
            </div>
        </header>

        <main className="Home__body Container">
            {view === 'list' && <EventList timestamp={timestamp} />}
            {view === 'profile' && <Profile />}
        </main>

        <footer className="Home__footer Container">
            <nav className='nav'>

                <a href="#" className='nav__link' onClick={handleHomeClick}>
                    <i className="material-icons nav__icon">home</i>
                </a>
                <a href="#" className='nav__link' onClick={handleAddClick}>
                    <i className="material-icons nav__icon">add_circle</i>
                </a>
                <a href="#" className='nav__link' onClick={handleLogoutClick}>
                    <i className="material-icons nav__icon">calendar_month</i>
                </a>
                <a href="#" className='nav__link' onClick={handleProfileClick}>
                    <i className="material-icons nav__icon">person</i>
                </a>

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
