class ChangePassword extends Component {
    constructor() {
        super(`<div class="ChangePassword">
            <form>
                <h2>Change Password</h2>
                <input type="password" name="password" id="password" placeholder="password">
                <input type="password" name="newPassword" id="newPassword" placeholder="newPassword">
                <input type="password" name="newPasswordRepeat" id="newPasswordRepeat" placeholder="newPasswordRepeat">
                <button type="submit" class="SubmitButton">Save</button>
            </form>
        </div>`)

        
    }
    
    onChangePasswordSubmit(callback) {
        const formChangePassword = this.container.querySelector('form')
    
        formChangePassword.addEventListener('submit', (event) => {
            event.preventDefault()
    
            const password = event.target.password.value
            const newPassword = event.target.newPassword.value
            const newPasswordRepeat = event.target.newPasswordRepeat.value
    
            updatePassword(sessionStorage.username, password, newPassword, newPasswordRepeat, (error) => {
                if (error) 
                    alert(error.message)
            })

            callback()
        })
    }

}