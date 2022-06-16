import { useState, useEffect, useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from '../components/Context'
import retrieveUser from '../logic/retrieveUser'
import Profile from '../components/Profile'
import './Home.sass'
import { useNavigate } from 'react-router-dom'
import { isJwtValid } from '../validators'

function Home({ onUserLogout }) {
    const logger = new Logger('Home')

    logger.info('call')

    const [name, setName] = useState(null)
    const [timestamp, setTimestamp] = useState(null)
    const [view, setView] = useState(null)
    const { handleFeedback } = useContext(Context)
    const navigate = useNavigate()

    const handleLogoutClick = () => {
        handleLogout()
    }

    const handleLogout = () => {
        onUserLogout()
    }

    /*  useEffect(() => {
          logger.info('componentDidMount')
  
          if (isJwtValid(sessionStorage.token))
              retrieveUser(sessionStorage.token, (error, user) => {
                  if (error) {
                      handleFeedback({ level: 'error', message: error.message })
  
                      handleLogout()
  
                      return
                  }
  
                  setName(user.name)
                  setView('list')
              })
          else navigate('/login')
      }, [])*/

    const handleAddClick = () => {

    }

    const handleProfileClick = () => setView('profile')

    const handleHomeClick = () => setView('home')

    logger.info('render')

    return isJwtValid(sessionStorage.token) ?
        <div className="Home Container">
            <header className="Home__header Container Container--row Container--spread-sides">
                <button className="Button Button--no-border Home__home" onClick={handleHomeClick}>📋</button>
                <div>
                    <button className="Button Button--no-border Home__profile" onClick={handleProfileClick}>{name}</button>
                    <button className="Button Button--no-border Home__logout" onClick={handleLogoutClick}>Logout</button>
                </div>
            </header>

            <main className="Home__body Container">
                <div className="Box">
                    <button className="Plus">+</button>
                </div>
                {view === 'profile' && <Profile />}
            </main>

            <footer className="Home__footer Container">
                <button className="Home__addMovement" onClick={handleAddClick}>+</button>
            </footer>
        </div> : <></>
}

export default Home