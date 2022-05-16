const { useState } = React

function Profile(props) {
    const logger = new Logger('Profile')

    logger.info('call')

    const [view, setView] = useState(null)

    // state = { view: null }

    const handleChangeNameClick = () => setView('changeName')

    const handleChangePasswordClick = () => setView('changePassword')

    const handleDeleteUserClick = () => setView('deleteUser')

    const handleUserNameChanged = () => {
        props.onUserNameChanged()
    }

    const handleUserPasswordChanged = () => {
        props.onUserPasswordChanged()
    }

    const handleUserDeleted = () => {
        props.onUserDeleted()
    }


    logger.info('render')

    return <div className="Profile Container Container--row">
        <button className="Button Button--small Profile__changeName" onClick={handleChangeNameClick}>Change Name</button>
        <button className="Button Button--small Profile__changePassword" onClick={handleChangePasswordClick}>Change Password</button>
        <button className="Button Button--small Profile__deleteUser" onClick={handleDeleteUserClick}>Delete User</button>

        {view === 'changeName' && <ChangeName onUserNameChanged={handleUserNameChanged} />}
        {view === 'changePassword' && <ChangePassword onUserPasswordChanged={handleUserPasswordChanged} />}
        {view === 'deleteUser' && <DeleteUser onUserDeleted={handleUserDeleted} />}
    </div>
}
