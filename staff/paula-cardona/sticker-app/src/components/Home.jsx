import { useState, useEffect, useContext } from 'react' 
import Logger from '../vendor/Loggy'
import Context from './Context'
import retrieveUser from '../logic/retrieveUser'
import saveNote from '../logic/saveNote'
import StickerList from '../components/StickerList'
import Profile from '../components/Profile'
import './Home.sass'

function Home(props) {
    const logger = new Logger('Home')

    logger.info('call')

    const [name, setName] = useState(null)
    const [timestamp, setTimestamp] = useState(null)
    const [view, setView] = useState(null)
    const { handleFeedback } = useContext(Context)

    

    //componentDidMount- load user when component mount. SESSIONSTORAGE DE TODA LA APP
    // componentDidMount(){ // RECUPERO USUARIO. cuando se monta el component se dispara este método de React
    //     retrieveUser(sessionStorage.token, (error, user) =>{ //si hay session storage recuperame el usuario y pintamelo
    //         if (error) {
    //             alert(error.message)

    //             return
    //         }
    //         //this.setName(user.name)
    //         this.setState({ name: user.name })
    //     })
    // }

    useEffect (() => { //cambiar el nombre arriba en el boton
        logger.info('componentDidMount')

        retrieveUser(sessionStorage.token, (error, user) => {
            if (error) {
                handleFeedback({ level: 'error', message: 'error.message' })

                handleLogoutClick()

                return
            }
            setName(user.name)
            setView('list')
        })
    }, [])


    const handleAddClick = () =>{
        saveNote(sessionStorage.token, null, null, error => {
            if (error) {
                handleFeedback({ level: 'error', message: error.message })

                return
            }
            setTimestamp(Date.now())
        })    
    }
    const handleLogoutClick = () => { //no hace falta manejar el evento porque es un boton, ni formulario ni div
        onUserLoggedOut()             //eliminame el token en la sessionstorage
    
    } 

    const onUserLoggedOut = () => {
        delete sessionStorage.token

        props.onUserLoggedOut()
    }


    const handleToProfile = () => setView ('profile')

    const handleToHome = () => setView ('stickerList')



    logger.info('render')
  
    return <div className="Home Container">
        <header className="Home__header ">
            <button className="Home__home" onClick={handleToHome}>📋</button>
            <button className="Home__profile" onClick={handleToProfile}>{name}</button>
            <button className="Home__logout" onClick={handleLogoutClick}>Logout</button>
                    
        </header>

        <main className="Home__body"> 
            {view === 'stickerList' && <StickerList timestamp={timestamp}/>}
            {view ==='profile' && <Profile />}
                    
        </main>

        <footer className="Home__footer Container">
            <button className="Home__addSticker" onClick={handleAddClick}>+</button>
        </footer>
    </div>
}

export default Home
//que se muestre solo si el view es igual que el state, se pintara sticker
//si la view es igual que profile se mostrará profile
    




    
