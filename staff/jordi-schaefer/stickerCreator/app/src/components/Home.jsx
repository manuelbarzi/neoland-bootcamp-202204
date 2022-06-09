import { useState, useEffect, useContext } from 'react'
import Logger from '../vendor/Logger'
import Context from './Context'
import retrieveUser from '../logic/retrieveUser'
import retrieveNotes from '../logic/retrieveNotes'
import saveNote from '../logic/saveNote'
import StickerList from './StickerList'
import Profile from './Profile'
import { Clip, ClipMessage } from './Clip'
import '../styles/Home.sass'
import '../styles/Sticker.sass'
import { useNavigate } from 'react-router-dom'
import { isJwtValid } from '../validators'


function Home(props) {

    const logger = new Logger('Home')
    logger.info('call')

    const [name, setName] = useState(null)
    const [notes, setNotes] = useState(null)
    const [timestamp, setTimestamp] = useState(null)
    const [view, setView] = useState(null)
    const [clip, setClip] = useState(null)
    const { handleFeedback } = useContext(Context) // quiero usar del contexto el handleFeedback, "traeme el value y destructurame esto"
    const navigate = useNavigate()

    const handleLogoutClick = () => {
        props.onUserLoggedOut()
    }

    const handleListClick = () => {
        setView('list')
        loadNotes()
    }

    const handleEditClick = () => {
        setView('edit')
    }

    const handleProfileClick = () => {
        setView('profile')
    }


    // primero renderiza y luego lanza el DidMount
    useEffect(() => {
        logger.info('useEffect')

        if (isJwtValid(sessionStorage.token)) {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    handleFeedback({ type: 'error', message: error.message})
                    handleLogoutClick()
                    return
                }
                setName(user.name)
                setView('edit')
            })
            //loadNotes()
        } else navigate('/login')
    }, [])


    const loadNotes = () => {
        try {
            retrieveNotes(sessionStorage.token, (error, notes) => {
                if (error) {
                    handleFeedback({ type: 'error', message: error.message})
                    return
                }
                setNotes(notes)
            })
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }



    const handleUserNameChanged = () => {
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    handleFeedback({ type: 'error', message: error.message})
                    return
                }
                setName(user.name)
            })
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }


    const handleAddClick = () => {
        try {
            saveNote(sessionStorage.token, null, null, error => {
                if (error) {
                    handleFeedback({ type: 'error', message: error.message})
                    return
                }
                setTimestamp(Date.now())
            })
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }

    const handleAddClip = () => setClip(true)
    const handleClipTimeout = () => setClip(null)


    logger.info('render')

    return isJwtValid(sessionStorage.token) ?
    <div className="Home container">
        <header className="Home__header">
            <div>
                <button className="Home__button" onClick={handleProfileClick}>{name}</button>
                <button className="Home__button" onClick={handleListClick}>📒</button>
                <button className="Home__button" onClick={handleEditClick}>✍</button>
            </div>
            <button className="Home__button" onClick={handleLogoutClick}>Logout</button>
        </header>

        <main className="Home__body">
            {view === 'edit' && <StickerList  timestamp={timestamp} />}

            {notes && view === 'list' && <ul className="List__stickers">
                {notes.map(note => <li className="Li__note" key={note.id}>
                        <h2>{note.text}</h2>
                    </li>)}
            </ul>}

            {view === 'profile' && <Profile onUserNameChanged={handleUserNameChanged}  onDeletedUser={props.onDeletedUser}/>}
        </main>
        
        <footer className="Home__footer Container">
            {view === 'edit' && <button className="Home__button Transparent" onClick={handleAddClick}>➕</button>}
        </footer>

        { clip && <Clip onClipTimeout={handleClipTimeout} />}
        { clip && <ClipMessage/>}
        <span className="Clip__button material-symbols-outlined" onClick={handleAddClip} >info</span>
    </div> : <></>
}

export default Home