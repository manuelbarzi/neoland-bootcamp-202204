const { Component } = React

class ChangePassword extends Component{

    handleFormSubmit = event => {
        event.preventDefault ()

            const password = event.target.password.value //en el evento del target, en este caso del form, pon el valor del password i guardalo en password
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


    render (){
        return <div className="ChangePassword">
            <form className="Container" onSubmit={this.handleFormSubmit}>
                <input className="Input" type="password" name="password" placeholder="current password"/>

                <input className="Input" type="password" name="newPassword" placeholder="new password"/>
                <input className="Input" type="password" name="newPasswordRepeat" placeholder="repeat new password"/>

                <button>Save</button>
            </form>
        </div>
    
    }
}

