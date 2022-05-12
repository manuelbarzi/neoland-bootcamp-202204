const { Component } = React

class Profile extends Component {
    constructor() {
        super()

        this.state = { view: null }

        this.logger = new Logger('Profile')

        this.logger.info('constructor')
    }
    // state = { view: null }

    handleChangeNameClick = () => this.setState({ view: 'changeName' })

    handleChangePasswordClick = () => this.setState({ view: 'changePassword' })

    handleDeleteUserClick = () => this.setState({ view: 'deleteUser' })

    handleOnDeletedUser = () => location.reload()

    handleUserNameChanged = () => {
        this.props.onUserNameChanged()
    }

    handleUserPasswordChanged = () => {
        this.props.onUserPasswordChanged()
    }

    handleUserDeleted = () => {
        this.props.onUserDeleted()
    }

    render() {
        this.logger.info('render')

        return <div className="Profile Container Container--row">
            <button className="Button Button--small Profile__changeName" onClick={this.handleChangeNameClick}>Change Name</button>
            <button className="Button Button--small Profile__changePassword" onClick={this.handleChangePasswordClick}>Change Password</button>
            <button className="Button Button--small Profile__deleteUser" onClick={this.handleDeleteUserClick}>Delete User</button>
            
            {this.state.view === 'changeName' && <ChangeName onUserNameChanged={this.handleUserNameChanged} />}
            {this.state.view === 'changePassword' && <ChangePassword onUserPasswordChanged={this.handleUserPasswordChanged} />}
            {this.state.view === 'deleteUser' && <DeleteUser onUserDeleted={this.handleUserDeleted} />}
        </div>
    }
}
