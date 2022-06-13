import { useState, useEffect, useContext } from 'react'
import Logger from '../vendor/Loggy'
// import Context from './Context'
// import retrieveUser from '../logic/retrieveUser'
// import StickerList from './StickerList'
import Profile from './Profile'
import Monday from './Monday'
import Tuesday from './Tuesday'
import Wednesday from './Wednesday'
import Thursday from './Thursday'
import Friday from './Friday'
import Saturday from './Saturday'
import Sunday from './Sunday'
import './Home.sass'
// import { useNavigate } from 'react-router-dom'
import { isJwtValid } from '../validators'



function Home(props) {
    const logger = new Logger('Home')

    logger.info('call')

    const [view, setView] = useState('home')

    const handleProfileClick = () => setView('profile')
    const handleMiSemanaClick = () => setView('home')

    const handleClickMondayDay = () => setView('monday')
    const handleClickTuesdayDay = () => setView('tuesday')
    const handleClickWednesdayDay = () => setView('wednesday')
    const handleClickThrusdayDay = () => setView('thursday')
    const handleClickFridayDay = () => setView('friday')
    const handleClickSaturdayDay = () => setView('saturday')
    const handleClickSundayDay = () => setView('sunday')

    const handleClickedBackToWeek = () => setView('week')
    const handleClickedNextToTuesday = () => setView('tuesday')
    const handleClickedBackToMonday = () => setView('monday')
    const handleClickedNextToWednesday = () => setView('wednesday')
    const handleClickedBackToTuesday = () => setView ('tuesday')
    const handleClickedtoThursday = () => setView ('thursday')
    const handleClickedBackToWednesday =() => setView('wednesday')
    const handleClickedNextToFriday = () => setView ('friday')
    const handleClickedBackToThursday = () => setView ('thursday')
    const handleClickedNextToSaturday = () => setView ('saturday')
    const handleClickedBackToFriday = () => setView ('friday')
    const handleClickedNextToSunday = () => setView ('sunday')
    const handleClickedBackToSaturday = () => setView ('saturday')
    const handleClickedNextToMonday = () => setView ('monday')
    




    logger.info('render')
    
    return isJwtValid(sessionStorage.token) ?
        <div className="Week__Container">
        
            {view=== 'home' && <header className="Week__header Container">
                <div>
                    <h1 className="Home__h1">HOLA</h1>
                </div>
            </header>}

            <main >
                {view === 'monday' && <Monday onClickedBackToWeek= {handleClickedBackToWeek} onClickedNextToTuesday={handleClickedNextToTuesday}/>}
                {view === 'tuesday' && <Tuesday onClickedBackToMonday= {handleClickedBackToMonday} onClickedNextToWednesday={handleClickedNextToWednesday}/>}
                {view === 'wednesday' && <Wednesday onClickedBackToTuesday={handleClickedBackToTuesday} onClickedNextToThrusday={handleClickedtoThursday}/>}
                {view === 'thursday' && <Thursday onClickedBackToWednesday={handleClickedBackToWednesday} onClickedNextToFriday={handleClickedNextToFriday}/>}
                {view === 'friday' && <Friday onClickedNextToThursday= {handleClickedBackToThursday} onClickedNextToSaturday={handleClickedNextToSaturday}/>}
                {view === 'saturday' && <Saturday onClickedBackToFriday = {handleClickedBackToFriday} onClickedNextToSunday= {handleClickedNextToSunday}/>}
                {view === 'sunday' && <Sunday onClickedBackToSaturday = {handleClickedBackToSaturday} onClickedNextToMonday= {handleClickedNextToMonday}/>}
                {view === 'profile' && <Profile />}
                {view === 'home' && <div className="Week__buttons">
                    <button className="Button Button Week__Day" onClick= {handleClickMondayDay}>Lunes</button>
                    <button className="Button Button Week__Day" onClick= {handleClickTuesdayDay}> Martes</button>
                    <button className="Button Button Week__Day" onClick= {handleClickWednesdayDay}>Miércoles</button>
                    <button className="Button Button Week__Day" onClick= {handleClickThrusdayDay}>Jueves</button>
                    <button className="Button Button Week__Day" onClick= {handleClickFridayDay}>Viernes</button>
                    <button className="Button Button Week__Day" onClick= {handleClickSaturdayDay}>Sábado</button>
                    <button className="Button Button Week__Day" onClick= {handleClickSundayDay}>Domingo</button>
                </div>}
            </main>


            <footer className="Home__footer Container Container--row Container--spread-sides">
                <button className="Button Button--no-border Home__home" onClick={handleMiSemanaClick}>Mi semana</button>
                <button className="Button Button--no-border Home__profile" onClick={handleProfileClick}>Perfil</button>
                
            </footer> 
        </div> : <></>
        
}

export default Home