import './Changes.sass'

function ChangePassword (props) {

    const handleClickBackToProfile = event => {
        event.preventDefault()
        props.onClickedBackToProfile()
    }
   

    return <div>
        <div className='back'>
            <button  className="atras" onClick={handleClickBackToProfile}>atrás</button>
        </div>
    <form className="Container" >
        <input className="form" type="text" name="name" placeholder="Titular de la tarjeta"/>
        <input className="form" type="password" name="password" placeholder="Número de la targeta"/>
        <input className="form" type="date" name="date" placeholder="Fecha de vencimiento"/>
        <input className="form" type="text" name="code" placeholder="Código de seguridad"/>
        

        <button className="Button">Guardar</button>
    </form>
</div>
}

export default ChangePassword
 