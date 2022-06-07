import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isJwtValid } from '../validators'
import Logger from '../vendor/Loggy'
import ChangeName from './changeName'
import ChangePassword from './changePassword'
import DeleteUser from './DeleteUser'


function Profile(props) {
    const logger = new Logger('Profile')

    logger.info('call')

    const navigate = useNavigate()

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

    return isJwtValid(sessionStorage.token) ?
        <div className="Profile Container Container--row">
            <button className="Button Button--small Profile__changeName" onClick={handleChangeNameClick}>Change Name</button>
            <button className="Button Button--small Profile__changePassword" onClick={handleChangePasswordClick}>Change Password</button>
            <button className="Button Button--small Profile__deleteUser" onClick={handleDeleteUserClick}>Delete User</button>

            {view === 'changeName' && <ChangeName onUserNameChanged={handleUserNameChanged} />}
            {view === 'changePassword' && <ChangePassword onUserPasswordChanged={handleUserPasswordChanged} />}
            {view === 'deleteUser' && <DeleteUser onUserDeleted={handleUserDeleted} />}
        </div> : <></>
}

export default Profile