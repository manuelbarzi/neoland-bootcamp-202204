import React from 'react'
import { useState } from 'react'
import Logger from '../vendor/Loggy'
import ChangeName from './changeName'
import ChangePassword from './changePassword'
import DeleteUser from './DeleteUser'
import { useNavigate, Routes, Route } from 'react-router-dom'


function Profilee(props) {
    const logger = new Logger('Profile')

    logger.info('call')

    const navigate = useNavigate()

    // state = { view: null }

    const handleChangeNameClick = () => navigate('/changeName')

    const handleChangePasswordClick = () => navigate('/changePassword')

    const handleDeleteUserClick = () => navigate('/deleteUser')

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

        <Routes>
            <Route path="/changeName" element={<ChangeName onUserNameChanged={handleUserNameChanged} />} />
            <Route path="/changePassword" element={<ChangePassword onUserPasswordChanged={handleUserPasswordChanged} />} />
            <Route path="/deleteUser" element={<DeleteUser onUserDeleted={handleUserDeleted} />} />
        </Routes>
    </div>
}

export default Profilee