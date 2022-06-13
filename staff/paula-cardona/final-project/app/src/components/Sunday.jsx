import { isJwtValid } from '../validators'
import { useState } from 'react'
import PanBlanco from './PanBlanco'
import PanIntegral from './PanIntegral'
import PanCereales from './PanCereales'
import PanSinGluten from './PanSinGluten'


function Viernes (props) {

    const [view, setView] = useState(null)

    const handleClickBackToSaturday = () => {
        props.onClickedBackToSaturday()

    }

    const handleClickNexToMonday = () => {
        props.onClickedNextToMonday()
    }

    const handlePanBlanco = () => setView ('panblanco')
    const handlePanIntegral = () => setView ('panintegral')
    const handlePanCereales = () => setView ('pancereales')
    const handlePanSinGluten = () => setView ('pansingluten')

   

    return isJwtValid (sessionStorage.token) ?
        <div className='Jueves Day'>
            <header className="Header__Day">
                <div>
                    <button className="Button Button__Day__Flecha" onClick={handleClickBackToSaturday}>atrás</button>
                        <h1 className= "h1__Day">Domingo</h1>
                    <button className="Button Button__Day__Flecha" onClick ={handleClickNexToMonday}>siguiente</button>
                </div>
            </header>
            <br>
            
            </br>
            
            <div >
                <button className="Button Button__Day__Bread" onClick= {handlePanBlanco}>Pan blanco</button>
                <button className="Button Button__Day__Bread" onClick= {handlePanIntegral}>Pan integral</button>
                <button className="Button Button__Day__Bread" on Click= {handlePanCereales}>Pan de cereales</button>
                <button className="Button Button__Day__Bread" on Click= {handlePanSinGluten}>Pan sin gluten</button>
            </div>

            {view === 'panblanco' && <PanBlanco />}
            {view === 'panintegral' && <PanIntegral />}
            {view === 'pancereales' && <PanCereales />}
            {view === 'pansingluten' && <PanSinGluten />}

        </div> : <></>
}
export default Viernes

