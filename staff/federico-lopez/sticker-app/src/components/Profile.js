class Profile extends Component {
    constructor() {
        super(`<div class="Profile">
        <a class="ChangeNameButton">Change Name</a>
        <a class="ChangePasswordButton">Change Password</a>
        <a class="DeleteUserButton">Delete User</a>
        </div>`)

        const changeNameButton = this.container.querySelector('.ChangeNameButton')
        const changePasswordButton = this.container.querySelector('.ChangePasswordButton')
        const deleteUserButton = this.container.querySelector('.DeleteUserButton')

        let changeName, changePassword, deleteUser

        changeNameButton.addEventListener('click', () => {
            
            if (!changeName || !this.has(changeName)) {
                if (changePassword && this.has(changePassword))
                    this.remove(changePassword)

                if(deleteUser && this.has(deleteUser))
                    this.remove(deleteUser)

                changeName = new ChangeName

                this.add(changeName)

                changeName.onChangeNameSubmit(() => {
                    this.remove(changeName)
                })
            }
        })

        changePasswordButton.addEventListener('click', () => {
            if (!changePassword || !this.has(changePassword)) {
                if (changeName && this.has(changeName))
                    this.remove(changeName)
                
                if(deleteUser && this.has(deleteUser))
                    this.remove(deleteUser)

                changePassword = new ChangePassword

                this.add(changePassword)

                changePassword.onChangePasswordSubmit(() => {
                    this.remove(changePassword)
                })
            }
        })

        deleteUserButton.addEventListener('click', () => {
            if (!deleteUser || !this.has(deleteUser)) {
                if (changeName && this.has(changeName))
                    this.remove(changeName)

                if (changePassword && this.has(changePassword))
                    this.remove(changePassword)

                deleteUser = new DeleteUser

                this.add(deleteUser)

                deleteUser.onDeleteUserSubmit(() => {
                    location.reload()
                })
            }
        })
    }
}