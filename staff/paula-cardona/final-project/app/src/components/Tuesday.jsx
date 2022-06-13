import { isJwtValid } from '../validators'
function Tuesday (props) {

    const handleClickBackToMonday = () => {
        props.onClickedBackToMonday()

    }

    const handleClickNexToWednesday = () => {
        props.onClickedNextToWednesday()
    }


    return isJwtValid (sessionStorage.token) ?
        <div className='Lunes Day'>
            <header className="Header__Day">
                <div>
                    <button className="Button Button__Day__FlechaIzquierda" onClick={handleClickBackToMonday}>atrás</button>
                    <h1 className= "h1__Day">Martes</h1>
                    <button className="Button Button__Day__FlechaDerecha" onClick ={handleClickNexToWednesday}>siguiente</button>
                </div>
            </header>
            <br>
            
            </br>
            
            <div >
                <button className="Button Button__Day__Bread">Pan blanco</button>
                <button className="Button Button__Day__Bread">Pan integral</button>
                <button className="Button Button__Day__Bread">Pan de cereales</button>
                <button className="Button Button__Day__Bread">Pan sin gluten</button>
            </div>
        </div> : <></>
}
export default Tuesday
