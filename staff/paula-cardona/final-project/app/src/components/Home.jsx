import { useState, useEffect, useContext } from 'react'

import Context from './Context'
import retrieveUser from '../logic/retrieveUser'
import retrieveSchedule from '../logic/retrieveSchedule'
import Profile from './Profile'
import Day from './Day'
import './Home.sass'
import { useNavigate } from 'react-router-dom'
import { isJwtValid } from '../validators'



function Home() {

    const [view, setView] = useState('home')
    const [day, setDay] = useState(null)
    const [name, setName] = useState(null)
    const [schedule, setSchedule] = useState(null)
    const navigate = useNavigate()
    const { handleFeedback } = useContext(Context)


    const handleProfileClick = () => setView('profile')
    const handleMiSemanaClick = () => { setView('home'); setDay(null)}

    const handleClickMondayDay = () => { setView('day');  setDay('Lunes')}
    const handleClickTuesdayDay = () => { setView('day');  setDay('Martes')}
    const handleClickWednesdayDay = () => { setView('day');  setDay('Miércoles')}
    const handleClickThrusdayDay = () => { setView('day');  setDay('Jueves')}
    const handleClickFridayDay = () => { setView('day');  setDay('Viernes')}
    const handleClickSaturdayDay = () => { setView('day');  setDay('Sábado')}
    const handleClickSundayDay = () => { setView('day');  setDay('Domingo')}



    useEffect(() => {
        if (isJwtValid(sessionStorage.token))
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })

                    return
                }
                setName(user.name)
                
            })
            else navigate('/login')
    }, [])
        

    useEffect(()=> {
        getSchedule()        
    }, [view])



    const getSchedule = async () => {
        
        try{ const result= await retrieveSchedule (sessionStorage.token)
            setSchedule(result)
        } catch (error) {
            handleFeedback({ level: 'error', message: error.message })
        }
    }


   

    
    return isJwtValid(sessionStorage.token) ?
        <div className="Home__Container">
        
            {view=== 'home' && <header className="Home__header Container">
                <div>
                    <h1 className="Home__h1">Resumen de tu semana</h1>
                </div>
            </header>}


            <main >
                {view === 'home' && schedule && <div className="Home__buttons">
                    <button className="Button Button Home__Day" onClick= {handleClickMondayDay}>Lunes</button>
                    <button className="Button Button Home__Day" onClick= {handleClickTuesdayDay}> Martes</button>
                    <button className="Button Button Home__Day" onClick= {handleClickWednesdayDay}>Miércoles</button>
                    <button className="Button Button Home__Day" onClick= {handleClickThrusdayDay}>Jueves</button>
                    <button className="Button Button Home__Day" onClick= {handleClickFridayDay}>Viernes</button>
                    <h1>{schedule.friday[0].product.title}</h1>
                    <button className="Button Button Home__Day" onClick= {handleClickSaturdayDay}>Sábado</button>
                    <button className="Button Button Home__Day" onClick= {handleClickSundayDay}>Domingo</button>
                </div>}

                {view === 'day' && day && <Day dayClicked={day}/>}

                {view === 'profile' && <Profile />}
            </main>
            
            <footer className="Home__footer Container Container--row Container--spread-sides">
                <button className="Button Button--no-border Home__home" onClick={handleMiSemanaClick}>Mi semana</button>
                <button className="Button Button--no-border Home__profile" onClick={handleProfileClick}>Perfil</button>
            </footer> 
        </div> : <></>
        
}

export default Home