import { useState } from 'react'
import ChangeName from './ChangeName'
import ChangePassword from './ChangePassword'
import DeleteUser from './DeleteUser'

function Profile(props) {

    const [view, setView] = useState(null)


    const handleNameClick = () => {
        setView('name')
    }

    const handlePasswordClick = () => {
        setView('password')
    }

    const handleDeleteClick = () => {
        setView('delete')
    }

    const handleUserNameChanged = () => {
        props.onUserNameChanged()
    }


    return <div className="Profile">
        <div className="Profile__buttons">
            <button className="Button Special__button Profile__changeName" onClick={handleNameClick}>Change Name</button>
            <button className="Button Special__button Profile__changePassword" onClick={handlePasswordClick}>Change Password</button>
            <button className="Button Special__button Profile__deleteUser" onClick={handleDeleteClick}>Delete User</button>
        </div>
        <div className="Profile__views">
            {view === 'name' && <ChangeName onUserNameChanged={handleUserNameChanged} />}
            {view === 'password' && <ChangePassword/>}
            {view === 'delete' && <DeleteUser/>}
        </div>
    </div>
}

export default Profile