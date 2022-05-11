const { Component } = React

class ChangePassword extends Component {

    handleSaveClick = event => {
        event.preventDefault()

        const password = event.target.password.value
        const newPassword = event.target.newPassword.value
        const newPasswordRepeat = event.target.newPasswordRepeat.value

        updateUserPassword(sessionStorage.token, password, newPassword, newPasswordRepeat, error => {
            if (error) {
                alert(error.message)
                return
            }

            alert('Password saved')
        })
    }


    render() {
        return <div className="ChangePassword">
        <form className="Container" onSubmit={this.handleSaveClick}>
            <input className="form" type="password" name="password" placeholder=" Current password"/>
            <input className="form" type="password" name="newPassword" placeholder=" New password"/>
            <input className="form" type="password" name="newPasswordRepeat" placeholder=" Repeat new password"/>

            <button className="Button">Save</button>
        </form>
    </div>
    }
}