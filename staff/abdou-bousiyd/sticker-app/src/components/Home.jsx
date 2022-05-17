const { useState, useEffect } = React

function Home(props) {
    
    // state = {view: 'stickers', name: null, newNotes: []}
    // state = { name: null, timestamp: null, username: null, view: 'list', error: null, alert: null }

    const [alert, setAlert] = useState(null)
    const [view, setView] = useState(null)
    const [name, setName] = useState(null)

    // const [user, setUser] = useState(null)
    const [timestamp, setTimestamp] = useState(null)

    // componentDidMount() {
    //     this.handleRetriveUser()
    // }
    useEffect(()=>{
        handleRetriveUser()
    },[])

    const handleRetriveUser = () => {
        retrieveUser(sessionStorage.token, (error, user) => {
            if (error) {
                setAlert(<Alert error message={error.message} />)
                setTimeout( () => {
                    setAlert(null)
                }, 4000 )
                return
            }
            // this.setState({ name: user.name, username: user.username })
            setName(user.name)
            setView('list')
        })
    }

    const handleAddClick = () => {
        saveNote(sessionStorage.token, null, null, error => {
            if (error) {
                setAlert(<Alert error message={error.message} />)
                setTimeout( () => {
                    setAlert(null)
                }, 4000 )
                return
            }
            // this.setState({ timestamp: Date.now() })
            setTimestamp( Date.now() )
        })
    }

    const handleLogoutClick = () => {
        delete sessionStorage.token
        props.onUserLoggedOut()
    }

    const handleProfileNavigation = () => setView('profile')

    const handleHomeClick = () => setView('list')

        // const {state: {alert}} = this

    return <div className="Home Container">
        {alert && alert}
        <header className="Home__header Container Container--row Container--spread-sides">
            <button className="Button Button--no-border Home__home" onClick={handleHomeClick}>📋</button>
            <div>
                <button className="Button Button--no-border Home__profile" onClick={handleProfileNavigation}>{name}</button>
                <button className="Button Button--no-border Home__logout" onClick={handleLogoutClick}>Logout</button>
            </div>
        </header>

        <main className="Home__body Container">
            {/* { view === 'list' && user.username && <StickerList username={user.username} timestamp={timestamp} />} */}
            { view === 'list' && <StickerList timestamp={timestamp} />}
            { view === 'profile' && <Profile handleRetriveUser={handleRetriveUser} username={sessionStorage.username} />}
        </main>

        <footer className="Home__footer Container">
            <button className="Home__addSticker" onClick={handleAddClick}>+</button>
        </footer>
    </div>
}