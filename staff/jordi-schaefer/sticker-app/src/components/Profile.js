class Profile extends Component {
    constructor() {
        super (`<div class="Profile">
            <button class="Button Profile__changeName">Change Name</button>
            <button class="Button Profile__changePassword">Change Password</button>
            <div>
            <button class="Button Profile_delete">Delete user</button>
            </div>
        </div>`)

    let changeName, changePassword

    const changeNameButton = this.container.querySelector('.Profile__changeName')

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
}

// en la callback, en vez de manejar vistas, forzaremos un refresco de pagina
// location.reload()