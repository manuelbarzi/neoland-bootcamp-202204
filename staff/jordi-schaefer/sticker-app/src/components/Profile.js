function Profile() {
    Component.call(this, `<div class="Profile">
        <div class="Profile__buttons">
            <button class="Profile__changeName">Change Name</button>
            <button class="Profile__changePassword">Change Password</button>
        </div>
        <div class="Profile__functions">
        </div>
    </div>`)

    let changeName, changePassword

    const changeNameButton = this.container.querySelector('.Profile__changeName')
    const functions = this.container.querySelector('.Profile__functions')

    changeNameButton.addEventListener('click', () => {
        if (!changeName || !this.has(changeName)) {
            changeName = new ChangeName

            if (changePassword && this.has(changePassword))
                this.remove(changePassword)

            this.add(changeName)
        }
    })

    const changePasswordButton = this.container.querySelector('.Profile__changePassword')

    changePasswordButton.addEventListener('click', () => {
        if (!changePassword || !this.has(changePassword)) {
            changePassword = new ChangePassword

            if (changeName && this.has(changeName))
                this.remove(changeName)
                
            this.add(changePassword)
            //functions.appendChild(changePassword.container)
        }
    })
}

chainPrototypes(Component, Profile)