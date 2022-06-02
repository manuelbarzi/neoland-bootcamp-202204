import { useState, useEffect, useContext} from 'react'
import Context from "./Context"
import retrieveUser from "../logic/retrieveUser"
import saveNote from "../logic/saveNotes"
import StickerList from "./StickerList"
import Profile from "./Profile"

function Home(props) {
    const [name, setName] = useState(null)
    const [timestamp, setTimestamp] = useState(null)
    const [view, setView] = useState(null)
    const { handeleFeedback } = useContext(Context)

    const handleLogoutClick = () => {
        handelLogout()
    }

    const handelLogout = () => {
        delete sessionStorage.token

        props.onUserLoggedOut()
    }

    const handleProfileClick = () => {

        setView('profile')

    }

    const handleHomeClick = () => {
        retrieveUser(sessionStorage.token, (error, user) => {
            if (error) {
                alert(error.message)

                return

            }

            setView('sticker')
        })
    }
    useEffect(() => {

        retrieveUser(sessionStorage.token, (error, user) => {
            if (error) {

                handelLogout()

                return
            }

            // setState({ name: user.name, view: 'sticker' })
            setName(user.name)
            setView('sticker')
        })
    }, [])




    // Manejador del boton +
    const handleAddClick = () => {
        saveNote(sessionStorage.token, null, null, error => {
            if (error) {
                handeleFeedback(error.message)
                return
            }

            setTimestamp(Date.now())
        })
    }




    return <div className="Home Container">
        <header className="Home__header Container Container--row Container--spread-sides">
            <button className="Button Button--no-border Home__home" onClick={handleHomeClick}>📋</button>
            <div>
                <button className="Button Button--no-border Home__profile" onClick={handleProfileClick}>{name}</button>
                <button className="Button Button--no-border Home__logout" onClick={handleLogoutClick}>Logout</button>
            </div>
        </header>

        <main className="Home__body Container">
            {view === 'sticker' && <StickerList timestamp={timestamp} />}
            {view === 'profile' && <Profile />}
        </main>

        <footer className="Home__footer Container">
            <button className="Home__addSticker" onClick={handleAddClick}>+</button>
        </footer>
    </div>
}

export default Home