const { useState } = React

function Profile(props) {
    // state = {view: null}
    const [view, setView] = useState(null)

    const handleChangeNameClick = () => setView('change-name')

    const handleChangePasswordClick = () => setView('change-password')

    return <div className="Profile">
        <button className="Profile__changeName" onClick={handleChangeNameClick}>Change Name</button>
        <button className="Profile__changePassword" onClick={handleChangePasswordClick}>Change Password</button>

        {view === 'change-name' && <ChangeName handleRetriveUser={props.handleRetriveUser}/>}
        {view === 'change-password' && <ChangePassword />}

    </div>
}


        // const changeNameButton = this.container.querySelector('.Profile__changeName')

        // changeNameButton.addEventListener('click', () => {
        //     if (!changeName || !this.has(changeName)) {
        //         changeName = new ChangeName

        //         if (changePassword && this.has(changePassword))
        //             this.remove(changePassword)

        //         this.add(changeName)
        //     }
        // })

        // const changePasswordButton = this.container.querySelector('.Profile__changePassword')

        // changePasswordButton.addEventListener('click', () => {
        //     if (!changePassword || !this.has(changePassword)) {
        //         changePassword = new ChangePassword

        //         if (changeName && this.has(changeName))
        //             this.remove(changeName)

        //         this.add(changePassword)
        //     }
        // })
