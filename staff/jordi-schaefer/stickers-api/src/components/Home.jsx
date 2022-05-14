const { useState, useEffect, useContext } = React

function Home(props) {

    const [name, setName] = useState(null)
    const [notes, setNotes] = useState(null)
    const [timestamp, setTimestamp] = useState(null)
    const [view, setView] = useState(null)
    const { handleFeedback } = useContext(Context) // quiero usar del contexto el handleFeedback, "traeme el value y destructurame esto"


    const handleLogoutClick = () => {
        delete sessionStorage.token
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
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    handleFeedback({ type: 'error', message: error.message})
                    return
                }
                setName(user.name)
                setView('edit')
            })
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
        loadNotes()
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



    return <div className="Home container">
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

            {view === 'profile' && <Profile onUserNameChanged={handleUserNameChanged}/>}
        </main>
        
        <footer className="Home__footer Container">
            {view === 'edit' && <button className="Home__button Transparent" onClick={handleAddClick}>➕</button>}
        </footer>
    </div>
}