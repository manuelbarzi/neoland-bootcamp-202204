import { useState, useEffect, useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import retrieveUser from '../logic/retrieveUser'
import saveNote from '../logic/saveNote'
import StickerList from './StickerList'
import Profile from './Profile'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { isJwtValid } from '../validators'

function Home({ onUserLogout, onUserDeleted }) {
    const logger = new Logger('Home')

    logger.info('call')

    const [name, setName] = useState(null)
    const [timestamp, setTimestamp] = useState(null)
    const [view, setView] = useState('stickerList')
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

                // setState({ name: user.name, view: 'list' })
                setName(user.name)
                setView('stickerList')
            })
        else navigate('/login')
    }, [])

    const handleAddClick = () => {
        saveNote(sessionStorage.token, null, null, error => {
            if (error) {
                handleFeedback({ level: 'error', message: error.message })

                return
            }

            setTimestamp(Date.now())
        })
    }

    const handleOnUserDeleted = () => {
        onUserDeleted()
    }

    const handleProfileClick = () => setView('profile')

    const handleHomeClick = () => setView('stickerList')

    logger.info('render')

    return isJwtValid(sessionStorage.token) ?
        <div className="Home Container">
            <header className="Home__header Container Container--row Container--spread-sides">
                <button className="Button Button--no-border Home__home" onClick={handleHomeClick}>📋</button>
                <div>
                    <button className="Button Button--no-border Home__profile" onClick={handleProfileClick}>{name}</button>
                    <button className="Button Button--no-border Home__logout" onClick={handleLogoutClick}>logout</button>
                </div>
            </header>

            <main className="Home__body">
                {view === "stickerList" && <StickerList timestamp={timestamp} />}
                {view === "profile" && <Profile onUserDeleted={handleOnUserDeleted} />}
            </main>

            <footer className="Home__footer Container">
                <button className="Button Home__addSticker" onClick={handleAddClick}>➕</button>
            </footer>
        </div> : <></>
}

export default Home