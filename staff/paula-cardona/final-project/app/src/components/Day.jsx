import { useState, useEffect } from 'react'
import { isJwtValid } from '../validators'
import ProductsList from './ProductsList'
import './Day.sass'

function Day ({dayClicked, scheduleHome, handleChangeQuantity}) {

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

    const handlehola = () =>  setView ('main')
    


    return isJwtValid (sessionStorage.token) ?
        <div className='Day'>
            
            {view === 'main' && <div >
            <header className="Header__Day">
                <div>
                    <button className="Button Button__Day__Flecha" onClick={handleClickBack}>Anterior</button>
                    <button className="Button Button__Day__Flecha2" onClick ={handleClickNext}>Siguiente </button>
                    <h1 className= "Day__h1">{day}</h1> 
                </div>
            </header>
            
            {scheduleHome.map((elem) => <div key={elem.id}>
                        {elem.product.imagen && <img className='imgg' src={elem.product.imagen}/>}
                        <h4 className="element"> {elem.product.title}: {elem.quantity} </h4>   
                    </div>)}
           
            <button className="Button Button__Day__Bread" onClick= {handleClickonPanBlanco}>PAN BLANCO →</button>
                <button className="Button Button__Day__Bread" onClick= {handleClickonPanIntegral}>PAN INTEGRAL →</button>
                <button className="Button Button__Day__Bread" onClick= {handleClickonPanVariedades}>PAN DE VARIEDADES →</button>
                <button className="Button Button__Day__Bread" onClick= {handleClickonBolleria}>BOLLERIA →</button>
                <button className="Button Button__Day__Bread" onClick= {handleClickonPanSinGluten}>PAN SIN GLUTEN →</button>
            </div>}

    
           
            {view === 'productsList' && <ProductsList  day={day} typeClicked={type} onCrossClicked={handlehola} handleChangeQuantity={handleChangeQuantity}/>}
            

        </div> : <></>
}
export default Day 


