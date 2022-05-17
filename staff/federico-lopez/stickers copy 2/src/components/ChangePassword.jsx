const { Component } = React

class ChangePassword extends Component {
    handleOnFormSubmit = event => {
        event.preventDefault()

        const password = event.target.password.value
        const newPassword = event.target.newPassword.value
        const newPasswordRepeat = event.target.newPasswordRepeat.value
            
        updatePassword(this.props.username, password, newPassword, newPasswordRepeat, (error) => {
            if (error) 
                alert(error.message)
        })
        
        this.props.onChangedPassword()
    }
    
    render() {
        return <div class="ChangePassword">
        <form className="Profile__form" onSubmit={this.handleOnFormSubmit}>
            <h2>Change Password</h2>
            <input type="password" name="password" id="password" placeholder="password" />
            <input type="password" name="newPassword" id="newPassword" placeholder="newPassword" />
            <input type="password" name="newPasswordRepeat" id="newPasswordRepeat" placeholder="newPasswordRepeat" />
            <button type="submit" className="SubmitButton button button__light">Save</button>
        </form>
    </div>
    }
}