const { useState, useEffect, useContext } = React

function Home(props) {
    const logger = new Logger('Home')

    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const [name, setName] = useState(null)
    const[view, setView] = useState('stickers')
    const[notes, setNotes] = useState(null)
    const [timestamp, setTimestamp] = useState(null)
    
    const handleLogoutClick = () => {
        delete sessionStorage.token

        props.onUserLoggedOut()
    }

    const handleHomeClick = () => {

        setView('stickers' )
    }

    const handleProfileClick = () => {

        setView('profile')
    }

    useEffect(() => {
        logger.info('componentDidMount')//componentWillReceiveProps or willUpdate here ?

        loadUser()
        loadNotes()
    },[])

    const loadUser = () => {
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })
    
                    return
                }
                setName(user.name)
            })
        } catch (error) {
            handleFeedback({ level: 'error', message: error.message})
        }
    }

    const loadNotes = () => {
        try {
            retrieveNotes(sessionStorage.token, (error, notes) => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message})
                    return
                }
                setNotes(notes)
            })
        } catch(error) {
            handleFeedback({ level: 'error', message: error.message})
        }
    }

    const handleAddClick = () => {
        try {
            saveNote(sessionStorage.token, null, null, error => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message})
                    return
                }
                setNotes( notes )
                setTimestamp(Date.now())
            })
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }
    logger.info('render')

    return <div className="Home Container">
        <header className="Home__header Container Container--row Container--spread-sides" >
            <button className="Button Button--no-border Home__home" onClick={handleHomeClick}>📋</button>
            <div>
                <button className="Button Button--no-border Home__profile" onClick={handleProfileClick}>{name}</button>
                <button className="Button Button--no-border Home__logout" onClick={handleLogoutClick}>Logout</button>
            </div>
        </header>

        <main className="Home__body Container">
            {view === 'stickers' && <StickerList timestamp={timestamp} />}
            {view === 'profile' && <Profile />}
        </main>

        <footer className="Home__footer Container">
            <button className="Home__addSticker" onClick={handleAddClick}>+</button>
        </footer>
    </div>
}


