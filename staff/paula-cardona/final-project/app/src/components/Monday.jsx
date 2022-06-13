import { useState } from 'react'
import { isJwtValid } from '../validators'
import PanBlanco from './PanBlanco'
import PanIntegral from './PanIntegral'
import PanCereales from './PanCereales'
import PanSinGluten from './PanSinGluten'


function Monday (props) {

    const [view, setView] = useState('main')

    const handleClickBackToWeek = () => {
        props.onClickedBackToWeek()

    }

    const handleClickNexToTuesday = () => {
        props.onClickedNextToTuesday()
    }

    const handlePanBlanco = () => setView ('panblanco')
    const handlePanIntegral = () => setView ('panintegral')
    const handlePanCereales = () => setView ('pancereales')
    const handlePanSinGluten = () => setView ('pansingluten')

   

    return isJwtValid (sessionStorage.token) ?
        <div className='Lunes Day'>
            
            {view === 'main' && <div >
            <header className="Header__Day">
                <div>
                    <button className="Button Button__Day__Flecha" onClick={handleClickBackToWeek}>atrás</button>
                    <h1 className= "h1__Day">Lunes</h1>
                    <button className="Button Button__Day__Flecha" onClick ={handleClickNexToTuesday}>siguiente</button>
                </div>
            </header>
            <br>
            
            </br>
            
            
                <button className="Button Button__Day__Bread" onClick= {handlePanBlanco}>Pan blanco</button>
                <button className="Button Button__Day__Bread" onClick= {handlePanIntegral}>Pan integral</button>
                <button className="Button Button__Day__Bread" on Click= {handlePanCereales}>Pan de cereales</button>
                <button className="Button Button__Day__Bread" on Click= {handlePanSinGluten}>Pan sin gluten</button>
            </div>}

            {view === 'panblanco' && <PanBlanco />}
            {view === 'panintegral' && <PanIntegral />}
            {view === 'pancereales' && <PanCereales />}
            {view === 'pansingluten' && <PanSinGluten />}
            

        </div> : <></>
}
export default Monday 


