import { useState } from 'react'
import ChangeName from './ChangeName'
import ChangePassword from './ChangePassword'
import ChangeEmail from './ChangeEmail'
import ChangePayment from './ChangePayment'
import ChangeAddress from './ChangeAddress'
import { Link, useNavigate } from 'react-router-dom'


function Profile(props) {

    const [view, setView] = useState('profile')
    const navigate = useNavigate()

   
    const handleChangePassword = () => setView ('changepassword')
    const handleChangeEmail = () => setView ('changeemail')
    const handleChangeAddress = () => setView ('changeaddress')
    

    const handleLogout = () =>{
        delete sessionStorage.token
        navigate("/login")
    }

    const handleChangeName = () => setView('changename')
    const handleChangePayment = () => setView ('changepayment')
    const handleDeleteAccount = () => setView ('deleteaccount')

    const handleClickedBackToProfile = () => setView ('profile')

    const handleProfileChanged =() => setView ('profile')
    




    return <div className="Profile Container ">

        {view === 'profile' && <div>
            <header className="Week__header Container">
                <div>
                    <h1 className="Profile__h1">Profile</h1>
                </div>
            </header>
        
            <button className="Button__profile" onClick={handleChangeName}>Cambiar nombre</button>
            <button className="Button__profile" onClick={handleChangePassword}> Cambiar contraseña</button>
            <button className="Button__profile" onClick={handleChangeEmail}>Cambiar email</button>
            <p></p>
            <button className="Button__profile" onClick={handleChangePayment}>Método de pago</button>
            <button className="Button__profile" onClick={handleChangeAddress}>Dirección de envío</button>
            <p></p>
            <button className="Button__profile" onClick={handleLogout}>Cerrar sesión</button>

            <button className="Button__profile" onClick={handleDeleteAccount}>Eliminar cuenta</button>
        </div>}


        {view === 'changename' && <ChangeName onClickedBackToProfile={handleClickedBackToProfile} onProfileChanged={handleProfileChanged}/>}
        {view === 'changepassword' && <ChangePassword onClickedBackToProfile={handleClickedBackToProfile} onProfileChanged={handleProfileChanged}/>}
        {view === 'changeemail' && <ChangeEmail onClickedBackToProfile= {handleClickedBackToProfile}/>}

        {view === 'changepayment' && <ChangePayment onClickedBackToProfile= {handleClickedBackToProfile} />}
        {view === 'changeaddress' && <ChangeAddress onClickedBackToProfile= {handleClickedBackToProfile}/>}

        
        {/* // {view === 'deleteaccount' && <DeleteAccount />}    */} 
    
    </div>
}

export default Profile





