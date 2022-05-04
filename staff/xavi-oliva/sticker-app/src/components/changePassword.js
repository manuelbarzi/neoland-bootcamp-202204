class ChangePassword extends Component {
    constructor() {
        super(`<div class="ChangePassword Profile--form">
            <form class="Container">
                <input class="Input Input--light" type="password" name="password" placeholder="current password">
    
                <input class="Input Input--light" type="password" name="newPassword" placeholder="new password">
                <input class="Input Input--light" type="password" name="newPasswordRepeat" placeholder="repeat new password">
    
                <button class="Button">Save</button>
            </form>
        </div>`)
    
        this.container.querySelector('form').addEventListener('submit', event => {
            event.preventDefault()
    
            const password = event.target.password.value
            const newPassword = event.target.newPassword.value
            const newPasswordRepeat = event.target.newPasswordRepeat.value
    
            updateUserPassword(sessionStorage.username, password, newPassword, newPasswordRepeat, error => {
                if (error) {
                    alert(error.message)
    
                    return
                }
    
                alert('Password saved')
            })
    
        })
    }
}