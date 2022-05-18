import { useState } from "react"
import ChangeName from "./ChangeName"
import ChangePassword from "./ChangePassword"
import DeleteUser from "./DeleteUser"

function Profile(props) {
    const [view, setView] = useState('profile')
    
  
    const handelChangeName = () => {
        setView('ChangeName')
    }
    const handelChangePassword = () => {
        setView('ChangePass')
    }
    const handelDeleteUser = () => {
        setView('Delete')
    }


    return <div className="Profile">
        <button className="Profile__changeName" onClick={handelChangeName}>Change Name</button>

        <button className="Profile__changePassword" onClick={handelChangePassword}>Change Password</button>
        <button className="Profile__deleteUser" onClick={handelDeleteUser}>Delete User</button>
        {view === 'ChangeName' && <ChangeName />}
        {view === 'ChangePass' && <ChangePassword />}
        {view === 'Delete' && <DeleteUser  />}
    </div>
}

export default Profile





