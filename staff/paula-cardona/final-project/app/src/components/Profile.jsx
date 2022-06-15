import { useState } from 'react'
import ChangeName from './ChangeName'
import ChangePassword from './ChangePassword'
import ChangeEmail from './ChangeEmail'
import ChangePayment from './ChangePayment'
import ChangeAddress from './ChangeAddress'


function Profile(props) {

    const [view, setView] = useState('profile')

    const handleChangeName = () => setView ('changename')
    const handleChangePassword = () => setView ('changepassword')
    const handleChangeEmail = () => setView ('changeemail')
    const handleChangeAddress = () => setView ('changeaddress')
    const handleLogout = () => setView ('logout')
    const handleChangePayment = () => setView ('changepayment')
    const handleDeleteAccount = () => setView ('deleteaccount')

    const handleClickedBackToProfile = () => setView ('profile')
    

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

        {view === 'changename' && <ChangeName onClickedBackToProfile={handleClickedBackToProfile}/>}
        {view === 'changepassword' && <ChangePassword onClickedBackToProfile={handleClickedBackToProfile}/>}
        {view === 'changeemail' && <ChangeEmail onClickedBackToProfile= {handleClickedBackToProfile}/>}

        {view === 'changepayment' && <ChangePayment onClickedBackToProfile= {handleClickedBackToProfile} />}
        {view === 'changeaddress' && <ChangeAddress onClickedBackToProfile= {handleClickedBackToProfile}/>}

        {/* // {view === 'logout' && <ChangeLogout />}
        // {view === 'deleteaccount' && <DeleteAccount />}    */}
         

    </div>
}

export default Profile





