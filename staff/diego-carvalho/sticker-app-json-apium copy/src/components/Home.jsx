const { useState, useEffect, useContext } = React

function Home(props) {
    const logger = new Logger('Home')

    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const [user, setUser] = useState(null)
    const[view, setView] = useState('stickers')
    const[notes] = useState(null)

    const handleLogoutClick = () => {
        delete sessionStorage.token

        props.onUserLoggedOut()
    }

    useEffect(() => {
        logger.info('componentDidMount')//componentWillReceiveProps or willUpdate here ?

        loadUser()
    })

    const loadUser = () => {
        retrieveUser(sessionStorage.token, error => {
            if (error) {
                handleFeedback({ level: 'error', message: error.message })

                return
            }

            setUser(user)
        })
    }

    /*const handleAddClick = () => {
        saveNote(sessionStorage.token, noteId, text, error => {
            if(error) {
                handleFeedback({level: 'error', message: error.message})

                return
            }

            useState(notes)

        })
    }*/

    const handleProfileClick = () => {

        setView('profile')
    }

    const handleHomeClick = () => {

        setView('stickers' )
    }

    logger.info('render')

    return <div className="Home Container">
        <header className="Home__header Container Container--row Container--spread-sides" >
            <button className="Button Button--no-border Home__home" onClick={handleHomeClick}>📋</button>
            <div>
                <button className="Button Button--no-border Home__profile" onClick={handleProfileClick}>{useState.user}</button>
                <button className="Button Button--no-border Home__logout" onClick={handleLogoutClick}>Logout</button>
            </div>
        </header>

        <main className="Home__body Container">
            {view === 'stickers' && <StickerList />}
            {view === 'profile' && <Profile />}

        </main>

        <footer className="Home__footer Container">
            <button className="Home__addSticker" onClick={handleAddClick}>+</button>
        </footer>
    </div>
}


