const {Component} = React

class ChangePassword extends Component {

    handleFormSubmit = event => {
        event.preventDefault()

        const password = event.target.password.value
        const newPassword = event.target.newPassword.value
        const newPasswordRepeat = event.target.newPasswordRepeat.value

        updateUserPassword(sessionStorage.username, password, newPassword, newPasswordRepeat, error => {
            if(error){
                alert(error.message)

                return
            }

            alert('The password has been changed.')
        })   
    }
    handleSaveNewPasswordClick = () => {
        retrieveUser(sessionStorage.username, (error, user) => {
            if(error) {
                alert(error)

                return
            }
            
            
        })
    }

    render() {
        return <div className="ChangePassword">
            <form className="Container" onSubmit={this.handleFormSubmit}>
                <input type="password" name="password" placeholder="current password" />

                <input type="password" name="newPassword" placeholder="new password" />
                <input type="password" name="newPasswordRepeat" placeholder="repeat new password" />

                <button onClick={this.handleSaveNewPasswordClick}>Save</button>
            </form>
        </div>
    }

}
