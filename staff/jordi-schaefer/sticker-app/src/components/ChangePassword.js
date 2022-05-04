class ChangePassword extends Component {
    constructor() {
        super ( `<div class="ChangePassword">
        <form class="Container">
            <input class="form" type="password" name="password" placeholder=" Current password">
            <input class="form" type="password" name="newPassword" placeholder=" New password">
            <input class="form" type="password" name="newPasswordRepeat" placeholder=" Repeat new password">

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
