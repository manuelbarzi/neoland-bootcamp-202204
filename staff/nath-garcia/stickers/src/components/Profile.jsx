import React from 'react'
import ChangeName from '../components/ChangeName'
import ChangePassword from '../components/ChangePassword'
const { Component } = React

class Profile extends Component {
    state = { view : null }

    handleChangeNameClick = () => this.setState({ view : 'change-name' })

    handleChangePasswordClick = () => this.setState({ view: 'change-password' })

    handleDeleteUserClick = () => this.setState({ view: 'delete-user' })


    render() {
        return  <div className="Profile Container">
            <button className="Profile__changeName" onClick={this.handleChangeNameClick}>Change Name</button>
            <button className="Profile__changePassword" onClick={this.handleChangePasswordClick}>Change Password</button>
            <button className="Profile__deleteUser" onClick={this.handleDeleteUserClick}>Delete User</button>

            {this.state.view ==='change-name' && <ChangeName />}
            {this.state.view === 'change-password' && <ChangePassword />}
        </div>

    }
}

export default Profile