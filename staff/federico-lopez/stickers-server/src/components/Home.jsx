const { useState, useEffect, useContext } = React

function Home(props) {
    const { handleFeedback } = useContext(Context)

    const [view, setView] = useState('stickers')
    const [newStickers, setNewStickers] = useState(null)
    const [name, setName] = useState(null)

    const onLogoutButtonClick = () => {
        delete sessionStorage.token

        props.onLoggedOut()
    }

    const handleNewNoteCreated = () => {
        setNewStickers(false)
    }

    const handleOnProfileButton = () => {
        setView('profile')
    }

    const handleOnStickersButton = event => {
        event.preventDefault()

        setView('stickers')
    }

    const handleAddNoteClick = event => {
        event.preventDefault()

        newStickers === true || newStickers === null ? setNewStickers(false) : setNewStickers(true)
    }

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    handleFeedback(error.message)

                    return
                }
                setName(user.name)
            })
        } catch (error) {
            handleFeedback(error.message)
        }
    }, [])


    const handleOnChangedName = (newName) => {
        setName(newName)
    }

    return <div className="Home">
        <header className="header">
            <a className="viewStickersButton" onClick={handleOnStickersButton} >Stickers</a>
            <a className="profileButton" onClick={handleOnProfileButton} >{name}</a>
            <a className="logout" onClick={onLogoutButtonClick}>Log Out</a>
        </header>

        <main>
            {view === 'profile' && <Profile onChangedName={handleOnChangedName} onDeletedUser={props.onDeletedUser} name={name}/>}
            {view === 'stickers' && <List newStickers={newStickers} onNewNoteCreated={handleNewNoteCreated} />}
        </main>

        <footer className="footer">
            <a className="addNote" onClick={handleAddNoteClick} >+</a>
        </footer>
    </div>
}
