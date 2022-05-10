const { Component } = React

class Profile extends Component {
    handleProfileSubmit = event => {
        event.preventDefault()

        let changeName, changePassword

        changeNameButton = () => {
            if (!changeName || !this.has(changeName)) {
            changeName = new ChangeName

            if (changePassword && this.has(changePassword))
                this.remove(changePassword)

            this.props(changeNameButton)
            }
        }
    }

    render() {
        return <div class="Profile">
            <button class="Profile__changeName" onClick={this.changeNameButton}>Change Name</button>
            {/* <button class="Profile__changePassword" onClick={this.changePasswordButton}>Change Password</button> */}
        </div>
    }
}