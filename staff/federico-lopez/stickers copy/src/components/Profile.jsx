const { Component } = React

class Profile extends Component {
    state = { view: null }

    handleChangeName = event => {
        event.preventDefault()

        this.setState({ view: 'changeName' })
    }

    handleChangePassword = event => {
        event.preventDefault()

        this.setState({ view: 'changePassword' })
    }

    handleDeleteUser = event => {
        event.preventDefault()

        this.setState({ view: 'deleteUser' })
    }

    handleOnProfileChange = () => {
        this.setState({ view: null })
    }

    handleOnDeletedUser = () => {
        location.reload()
    }

    render() {
        return <div className="Profile">
            <div className="Profile__Buttons"><a className="ChangeNameButton button__profile" onClick={this.handleChangeName} >Change Name</a>
            <a className="ChangePasswordButton button__profile" onClick={this.handleChangePassword} >Change Password</a>
            </div>
            <a className="DeleteUserButton button__profile" onClick={this.handleDeleteUser} >Delete User</a>
            {this.state.view === 'changeName' && <ChangeName username={this.props.username} onChangedName={this.handleOnProfileChange} />}
            {this.state.view === 'changePassword' && <ChangePassword username={this.props.username} onChangedPassword={this.handleOnProfileChange} />}
            {this.state.view === 'deleteUser' && <DeleteUser username={this.props.username} onDeletedUser={this.handleOnDeletedUser} />}
        </div>
    }
}
