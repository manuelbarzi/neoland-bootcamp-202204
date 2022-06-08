import { useState, useEffect, useContext } from 'react' 
import Context from './Context'
import retrieveUser from '../logic/retrieveUser'
import saveNote from '../logic/saveNote'
import StickerList from '../components/StickerList'
import Profile from '../components/Profile'
import Lunes from '../components/Lunes'
import './Home.sass'
import { useNavigate } from 'react-router-dom'
import { isJwtValid } from '../validators'

function Home(props) {
    
    const [name, setName] = useState(null)
    const [timestamp, setTimestamp] = useState(null)
    const [view, setView] = useState(null)
    const { handleFeedback } = useContext(Context)
    const navigate = useNavigate()


    useEffect (() => { //cambiar el nombre arriba en el boton
        
        if (isJwtValid(sessionStorage.token))
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })

                    handleLogoutClick()

                    return
                }// setState({ name: user.name, view: 'list' })
                setName(user.name)
                setView('/')
            })
        else navigate('/login')
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
    

    const handleToProfile = () => setView ('profile')

    const handleToHome = () => setView ('stickerList')

    
    const handleLogoutClick = () => { //no hace falta manejar el evento porque es un boton, ni formulario ni div
        delete sessionStorage.token
        setView('login')       //eliminame el token en la sessionstorage
    
    } 
    
    const handleSemanaClick = () => setView('lunes')
    
  
    return isJwtValid(sessionStorage.token) ?
    
        <div className="Home Container">
            <header className="Home__header ">
                
            </header>

            <main className="Home__body"> 
                {view === 'stickerList' && <StickerList timestamp={timestamp}/>}
                {view ==='profile' && <Profile />}
                {view ==='lunes' && <Lunes />}
                        
            </main>
           
            <footer className="Home__footer ">
                <button className="Home__home" onClick={handleToHome}>Home</button>
                <button className="Home__Semana" onClick={handleSemanaClick}>Mi semana</button>
                <button className="Home__profile" onClick={handleToProfile}>{name}</button>
            </footer>

        </div> : <></>
}

export default Home
//que se muestre solo si el view es igual que el state, se pintara sticker
//si la view es igual que profile se mostrará profile
    




    
