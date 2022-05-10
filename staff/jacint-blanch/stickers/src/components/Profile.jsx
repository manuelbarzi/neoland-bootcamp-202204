const { Component } = React

class Profile extends Component {
    state = { view: null }

    handleChangeNameClick = () => this.setState({ view: 'change-name' })

    handleChangePasswordClick = () => this.setState({ view: 'change-password' })

    render() {
        return <div className="Profile Container">
            <button className="Profile__changeName" onClick={this.handleChangeNameClick}>Change Name</button>
            <button className="Profile__changePassword" onClick={this.handleChangePasswordClick}>Change Password</button>

            {this.state.view === 'change-name' && <ChangeName />}
            {this.state.view === 'change-password' && <ChangePassword />}
        </div>
    }
}