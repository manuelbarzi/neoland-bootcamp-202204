import { Component } from 'react'
import updateUserPassword from '../logic/updateUserPassword'

class ChangePassword extends Component {
    handleSubmit = event => {
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

    }

    render() {
        return <div className="ChangePassword">
            <form className="Container" onSubmit={this.handleSubmit}>
                <input className="Input Input--light" type="password" name="password" placeholder="current password" />

                <input className="Input Input--light" type="password" name="newPassword" placeholder="new password" />
                <input className="Input Input--light" type="password" name="newPasswordRepeat" placeholder="repeat new password" />

                <button className="Button Button--light">Save</button>
            </form>
        </div>
    }
}

export default ChangePassword