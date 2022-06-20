import { useState, useEffect } from 'react'
import { isJwtValid } from '../validators'
import ProductsList from './ProductsList'



function Day ({dayClicked}) {

    const [day, setDay] = useState(null)
    const [view, setView] = useState('main')
    const [type, setType] = useState(null)


    useEffect(() => { //cuando cargue la pagina nos guardaremos el dayClicked que viene por arriba en el nuevo day de DAY. ponemos este nuevo day en title
        setDay(dayClicked) //con el day con el qye venga de dayclicked
    }, [])


    const handleClickBack = () => {
        if (day === 'Lunes') setDay('Domingo')  //si el valor que guardo es el de lunes, el valor del click back en lunes será domingo

        else if (day === 'Martes') setDay('Lunes')  //si le damos a la flecha de back de domingo, entonces day guardara el valor de domingo, y la flecha tendria valor de lunes
        else if (day === 'Miércoles') setDay('Martes')
        else if (day === 'Jueves') setDay('Miércoles')
        else if (day === 'Viernes') setDay('Jueves')
        else if (day === 'Sábado') setDay('Viernes')
        else if (day === 'Domingo') setDay('Sábado')
    }

    const handleClickNext = () => {
        if (day === 'Lunes') setDay('Martes')
        else if (day === 'Martes') setDay('Miércoles')
        else if (day === 'Miércoles') setDay('Jueves')
        else if (day === 'Jueves') setDay('Viernes')
        else if (day === 'Viernes') setDay('Sábado')
        else if (day === 'Sábado') setDay('Domingo')
        else if (day === 'Domingo') setDay('Lunes')
    }
 
    const handleClickonPanBlanco = () => { setView('productsList');  setType(0)}
    const handleClickonPanIntegral = () => { setView('productsList');  setType(1)}
    const handleClickonPanVariedades = () => { setView('productsList');  setType(2)}
    const handleClickonBolleria = () => { setView('productsList');  setType(3)}
    const handleClickonPanSinGluten = () => { setView('productsList');  setType(4)}


    return isJwtValid (sessionStorage.token) ?
        <div className='Lunes Day'>
            
            {view === 'main' && <div >
            <header className="Header__Day">
                <div>
                    <button className="Button Button__Day__Flecha" onClick={handleClickBack}>anterior</button>
                    <h1 className= "h1__Day">{day}</h1> 
                    <button className="Button Button__Day__Flecha" onClick ={handleClickNext}>siguiente</button>
                </div>
            </header>
            <br>
            
            </br>
            <button className="Button Button__Day__Bread" onClick= {handleClickonPanBlanco}>Pan blanco</button>
                <button className="Button Button__Day__Bread" onClick= {handleClickonPanIntegral}>Pan integral</button>
                <button className="Button Button__Day__Bread" onClick= {handleClickonPanVariedades}>Pan de variedades</button>
                <button className="Button Button__Day__Bread" onClick= {handleClickonBolleria}>Bolleria</button>
                <button className="Button Button__Day__Bread" onClick= {handleClickonPanSinGluten}>Pan sin gluten</button>
            </div>}

           
            {view === 'productsList' && <ProductsList  day={day} typeClicked={type} />}
            

        </div> : <></>
}
export default Day 


