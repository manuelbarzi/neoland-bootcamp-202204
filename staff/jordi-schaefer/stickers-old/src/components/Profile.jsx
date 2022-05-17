const { Component } = React

class Profile extends Component {

    state = { view: null}

    handleNameClick = () => {
        this.setState({ view: 'name' })
    }

    handlePasswordClick = () => {
        this.setState({ view: 'password' })
    }

    handleDeleteClick = () => {
        this.setState({ view: 'delete' })
    }

    handleUserNameChanged = () => {
        this.props.onUserNameChanged()
    }


    render() {
        return <div className="Profile">
            <div className="Profile__buttons">
            <button className="Button Profile__changeName" onClick={this.handleNameClick}>Change Name</button>
            <button className="Button Profile__changePassword" onClick={this.handlePasswordClick}>Change Password</button>
            <button className="Button Profile__deleteUser" onClick={this.handleDeleteClick}>Delete user</button>
            </div>
            <div className="Profile__views">
                {this.state.view === 'name' && <ChangeName onUserNameChanged={this.handleUserNameChanged} />}
                {this.state.view === 'password' && <ChangePassword onUserPasswordChanged={this.handleUserPasswordChanged} />}
                {this.state.view === 'delete' && <DeleteUser onUserDeleted={this.handleUserDeleted} />}
            </div>
        </div>
    }
}