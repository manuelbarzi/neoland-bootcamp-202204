const { useState } = React

function Profile(props) {
    const logger = new Logger('Profile')

    logger.info('call')


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

    const handleUserDeleted = () =>{
        props.onNameChange ()
    }


   
    
    logger.info('render')

    return <div className="Profile Container">
        <div>
            <button className="Button Profile__changeName" onClick={handleChangeName}>Change Name</button>
            <button className="Button Profile__changePassword" onClick={handleChangePassword}>Change Password</button>
            <button className="Button Profile__deleteUser"onClick={handleDeleteUser}>Delete user</button>
        </div>
        <div>
            {view ==='changeName' && <ChangeName onNameChange={handleNameChanged}/>}
            {view ==='changePassword' && <ChangePassword onPasswordChange = {handlePasswordChanged}/>}
            {view ==='deletedUser' && <DeletedUser onDeletedUser={handleUserDeleted} />}

        </div>
    </div>
}


