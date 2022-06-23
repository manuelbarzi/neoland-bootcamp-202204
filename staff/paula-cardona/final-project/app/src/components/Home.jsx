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

    const handleClickMondayDay = () => { setView('Lunes');  setDay('Lunes')}
    const handleClickTuesdayDay = () => { setView('Martes');  setDay('Martes')}
    const handleClickWednesdayDay = () => { setView('Miércoles');  setDay('Miércoles')}
    const handleClickThrusdayDay = () => { setView('Jueves');  setDay('Jueves')}
    const handleClickFridayDay = () => { setView('Viernes');  setDay('Viernes')}
    const handleClickSaturdayDay = () => { setView('Sábado');  setDay('Sábado')}
    const handleClickSundayDay = () => { setView('Domingo');  setDay('Domingo')}

    useEffect(() => {
        if (isJwtValid(sessionStorage.token))
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })
                    return
                }         
                setName(user.name)  
            })
        else navigate("/aboutUs")
    }, [])
        

    useEffect(()=> {
        getSchedule()        
    }, [view])


    const getSchedule = async () => {   
        try{ const result= await retrieveSchedule(sessionStorage.token)
            setSchedule(result)
        } catch (error) {
            handleFeedback({ level: 'error', message: error.message })
        }
    }

    return isJwtValid(sessionStorage.token) ?
        <div className="Home">
        
            {view=== 'home' && <header>
                <div>
                    <h1 className="Home__h1"> RESUMEN DE MI SEMANA</h1>
                </div>
            </header>}

            <main >
                {view === 'home' && schedule && <div className="Home__buttons">

                    <div className="prueba">
                    <button className="Button Home__Day" onClick= {handleClickMondayDay}>Lunes</button>
                        <div className="cajita">
                            {schedule.monday.map((elem) => <div key={elem.id}>
                                {elem.product.imagen && <img className="img" src={elem.product.imagen}/>} 
                                <h4 className="Home__h4">{elem.product.title}: {elem.quantity}</h4>   
                            </div>)}
                        </div>
                    </div>

                    <div className="prueba">
                    <button className="Button Home__Day" onClick= {handleClickTuesdayDay}> Martes</button>
                        <div  className="cajita">
                            {schedule.tuesday.map((elem) => <div key={elem.id}>
                                {elem.product.imagen && <img className="img" src={elem.product.imagen}/>} 
                                <h4 className="Home__h4">{elem.product.title}: {elem.quantity}</h4>   
                            </div>)}
                        </div>
                    </div>

                    <div className="prueba">
                        <button className="Button Home__Day" onClick= {handleClickWednesdayDay}>Miércoles</button>
                        <div className="cajita">
                            {schedule.wednesday.map((elem) => <div key={elem.id}>
                                    {elem.product.imagen && <img className="img" src={elem.product.imagen}/>} 
                                    <h4 className="Home__h4">{elem.product.title}: {elem.quantity}</h4>   
                                </div>)}
                        </div>
                    </div>

                    <div className="prueba">
                    <button className="Button Button Home__Day" onClick= {handleClickThrusdayDay}>Jueves</button>
                        <div className="cajita">
                            {schedule.thursday.map((elem) => <div key={elem.id}>
                                    {elem.product.imagen && <img className="img" src={elem.product.imagen}/>} 
                                    <h4 className="Home__h4">{elem.product.title}: {elem.quantity}</h4>   
                                </div>)}
                        </div>
                    </div>

                    <div className="prueba">
                    <button className="Button Button Home__Day" onClick= {handleClickFridayDay}>Viernes</button>
                        <div className="cajita">
                            {schedule.friday.map((elem) => <div className="img" key={elem.id}>
                                    {elem.product.imagen && <img src={elem.product.imagen}/>} 
                                    <h4 className="Home__h4">{elem.product.title}: {elem.quantity}</h4>   
                                </div>)}
                        </div>
                    </div>

                    <div className="prueba">
                    <button className="Button Button Home__Day" onClick= {handleClickSaturdayDay}>Sábado</button>
                        <div className="cajita">
                            {schedule.saturday.map((elem) => <div className="img" key={elem.id}>
                                    {elem.product.imagen && <img src={elem.product.imagen}/>} 
                                    <h4 className="Home__h4">{elem.product.title}: {elem.quantity}</h4>   
                                </div>)}
                        </div>
                    </div>

                    <div className="prueba">
                    <button className="Button Button Home__Day" onClick= {handleClickSundayDay}>Domingo</button>
                        <div className="cajita">
                            {schedule.sunday.map((elem) => <div className="img" key={elem.id}>
                                    {elem.product.imagen && <img src={elem.product.imagen}/>} 
                                    <h4 className="Home__h4">{elem.product.title}: {elem.quantity}</h4>   
                                </div>)}
                        </div>
                    </div>
                </div>}

                {view === 'Lunes' && day && <Day dayClicked={day} scheduleHome={schedule.monday}/>}
                {view === 'Martes' && day && <Day dayClicked={day} scheduleHome={schedule.tuesday}/>}
                {view === 'Miércoles' && day && <Day dayClicked={day} scheduleHome={schedule.wednesday}/>}
                {view === 'Jueves' && day && <Day dayClicked={day} scheduleHome={schedule.thursday}/>}
                {view === 'Friday' && day && <Day dayClicked={day} scheduleHome={schedule.friday}/>}
                {view === 'Saturday' && day && <Day dayClicked={day} scheduleHome={schedule.saturday}/>}
                {view === 'Sunday' && day && <Day dayClicked={day} scheduleHome={schedule.sunday}/>}
                {view === 'profile' && <Profile name={name}/>}
            </main>
            
            <footer className="Home__footer">
                <button className="Home__button" onClick={handleMiSemanaClick}>Mi semana</button>
                <button className="Home__button2" onClick={handleProfileClick}>Perfil</button>
            </footer> 
        </div> : <></>
        
}

export default Home