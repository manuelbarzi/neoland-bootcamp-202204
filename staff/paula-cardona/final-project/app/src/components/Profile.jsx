import { useState } from 'react'
import ChangeName from './ChangeName'
import ChangePassword from './ChangePassword'


function Profile(props) {
   
    const [view, setView] = useState('profile')

    const handleChangeName = () => setView ('changeName')
    const handleChangePassword = () => setView('changePassword')
    const handleDeleteUser = () => setView('deletedUser')
    

    const handleNameChanged = () =>{
        props.onNameChange ()
    }

    const handlePasswordChanged = () =>{
        props.onNameChange ()
    }
    const handleLogoutClick = () => { //no hace falta manejar el evento porque es un boton, ni formulario ni div
        onUserLoggedOut()             //eliminame el token en la sessionstorage
    
    } 

    const onUserLoggedOut = () => {
        delete sessionStorage.token

        props.onUserLoggedOut()
    }



    return <div className="Profile Container">
        <div>
            <button className="Button Profile__changeName" onClick={handleChangeName}>Change Name</button>
            <button className="Button Profile__changePassword" onClick={handleChangePassword}>Change Password</button>
            <button className="Button Profile__logout" onClick={handleLogoutClick}>Cerrar sesión</button>
            <button className="Button Profile__deleteUser"onClick={handleDeleteUser}>Delete User</button>
        </div>
        <div>
            {view ==='changeName' && <ChangeName onNameChange={handleNameChanged}/>}
            {view ==='changePassword' && <ChangePassword onPasswordChange = {handlePasswordChanged}/>}
        </div>
    </div>
}

export default Profile
