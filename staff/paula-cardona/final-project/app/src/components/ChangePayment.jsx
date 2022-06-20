function ChangePassword (props) {

    const handleClickBackToProfile = event => {
        event.preventDefault()
        props.onClickedBackToProfile()
    }
   

    return <div className="ChangePayment Container">
    <form className="Container" >
        <button className="Button Button__Day__Flecha" onClick={handleClickBackToProfile}>atrás</button>
        <input className="form" type="text" name="name" placeholder="Nombre del titular de la tarjeta"/>
        <input className="form" type="password" name="password" placeholder="Número de la targeta"/>
        <input className="form" type="date" name="date" placeholder="Fecha de vencimiento"/>
        <input className="form" type="text" name="code" placeholder="Número del código de seguridad"/>
        

        <button className="Button">Guardar</button>
    </form>
</div>
}

export default ChangePassword
 