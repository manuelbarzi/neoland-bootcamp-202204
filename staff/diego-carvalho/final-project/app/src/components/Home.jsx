import { useState, useEffect, useContext } from 'react'
import Logger from 'vendor/Loggy'
import Context from './Context'
import retrieveUser from '../logic/retrieveUser'
import MyCalendar from './MyCalendar'
import HomeEventList from './HomeEventList'
import Profile from './Profile'
import EventCreator from './EventCreator'
import { isJwtValid } from 'validators'
import './Home.sass'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { MdHome, MdOutlineCalendarToday, MdLogout, MdSearch, MdPermIdentity, MdAddCircleOutline } from "react-icons/md"
import SearchBar from './SeachBar'


function Home({ onUserLogout }) {
    const logger = new Logger('Home')

    logger.info('call')

    const [name, setName] = useState(null)
    const { handleFeedback } = useContext(Context)
    const navigate = useNavigate()

    const handleLogoutClick = () => {
        handleLogout()
    }

    const handleLogout = () => {
        onUserLogout()
    }

    useEffect(() => {
        logger.info('componentDidMount')

        if (isJwtValid(sessionStorage.token))
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })

                    handleLogout()

                    return
                }

                setName(user.name)

            })
        else navigate('/login')
    }, [])

    const handleHomeClick = event => {
        event.preventDefault()

        navigate('/')
    }

    const handleSearchBarClick = event => {
        event.preventDefault()

        navigate('/searchEvent')
    }

    const handleEventCreatorClick = event => {
        event.preventDefault()

        navigate('/eventCreator')
    }

    const handleMyCalendarClick = event => {
        event.preventDefault()

        navigate('/myCalendar')
    }

    const handleProfileClick = event => {
        event.preventDefault()

        navigate('/profile')
    }

    logger.info('render')

    return isJwtValid(sessionStorage.token) ?

        <div className="Home Container">
            <header className="Home__header">
                <div className='Home__header-nav'>
                    <h1>Hello {name}</h1>
                    <a href='#' onClick={handleSearchBarClick}>< MdSearch /></a>
                    <a href="#" onClick={handleLogoutClick}><MdLogout /></a>
                </div>
            </header>

            <main className="Home__body">
                <Routes>
                    <Route index element={<HomeEventList />} />
                    <Route path="/eventCreator" element={<EventCreator />} />
                    <Route path="/myCalendar" element={<MyCalendar />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/searchEvent" element={<SearchBar />} />
                </Routes>
            </main>

            <footer className="Home__footer">
                <nav className='Home__footer-nav'>
                    <a href="#" onClick={handleHomeClick}><MdHome className="icons" /></a>
                    <a href="#" onClick={handleEventCreatorClick}><MdAddCircleOutline className="icons" /></a>
                    <a href="#" onClick={handleMyCalendarClick}><MdOutlineCalendarToday className="icons" /></a>
                    <a href="#" onClick={handleProfileClick}><MdPermIdentity className="icons" /></a>
                </nav>

            </footer>
        </div> : <></>
}

export default Home

