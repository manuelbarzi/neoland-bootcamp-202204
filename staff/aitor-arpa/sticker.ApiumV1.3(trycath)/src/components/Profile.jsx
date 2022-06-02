const { useState } = React

function Profile() {
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
        {view === 'Delete' && <Delete />}
    </div>
}





