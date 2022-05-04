class Profile extends Component{
    constructor(){
    super( `<div class="Profile">
        <button class="Profile__changeName">Change Name</button>
        <button class="Profile__changePassword">Change Password</button>
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
        }
    })
}}
