

function Profile(props) {

    

    return <div className="Profile Container ">

    <header className="Week__header Container">
                <div>
                    <h1 className="Profile__h1">Profile</h1>
                </div>
            </header>
        
        <button className="Button__profile" >Cambiar nombre</button>
        <button className="Button__profile" > Cambiar contraseña</button>
        <button className="Button__profile" >Cambiar email</button>
        <p></p>
        <button className="Button__profile" >Método de pago</button>
        <button className="Button__profile" >Dirección de envío</button>
        <p></p>
        <button className="Button__profile" >Cerrar sesión</button>
        <button className="Button__profile" >Eliminar cuenta</button>

    </div>
}

export default Profile





{/* <button className="Button Button--no-border Home__logout" onClick={handleLogoutClick}>Logout</button> */}