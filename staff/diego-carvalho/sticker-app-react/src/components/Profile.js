class Profile extends Component {
    constructor() {
        super(`<div class="Profile">
            <button class="Profile__changeName">Change Name</button>
            <button class="Profile__changePassword">Change Password</button>

            <div>
            <button class="Profile__deleteUser">Delete User</button>
            </div>
            
        </div>`)

    let changeName, changePassword, deleteUser

    const changeNameButton = this.container.querySelector('.Profile__changeName')

    changeNameButton.addEventListener('click', () => {
        if (!changeName || !this.has(changeName)) {
            changeName = new ChangeName

            if (changePassword && this.has(changePassword))
                this.remove(changePassword)

            else if (deleteUser && this.has(deleteUser))
                this.remove(deleteUser)

            this.add(changeName)
        }
    })

    const changePasswordButton = this.container.querySelector('.Profile__changePassword')

    changePasswordButton.addEventListener('click', () => {
        if (!changePassword || !this.has(changePassword)) {
            changePassword = new ChangePassword

            if (changeName && this.has(changeName))
                this.remove(changeName)

            else if (deleteUser && this.has(deleteUser))
                this.remove(deleteUser)

            this.add(changePassword)
        }
    })

    const deleteButton = this.container.querySelector('.Profile__deleteUser')

    deleteButton.addEventListener('click', () => {
        if (!deleteUser || !this.has(deleteUser)) {
            deleteUser = new DeleteUser

            if (changeName && this.has(changeName))
                this.remove(changeName)

            else if (changePassword && this.has(changePassword))
                this.remove(changePassword)

            this.add(deleteUser)

        }
    })
}
}





