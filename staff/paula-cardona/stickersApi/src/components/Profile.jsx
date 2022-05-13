const { Component } = React

class Profile extends Component {
    state= { view: 'null' }

    handleChangeName = () => {
        
        this.setState ({ view: 'changeName' })
    }

    handleChangePassword = () =>{

        this.setState ({ view:'changePassword'})
    }

    handleDeleteUser = () => {
        
        this.setState ({ view: 'deletedUser'})
    }

    handleNameChanged = () =>{
        this.props.onNameChange ()
    }

   
   

    render() {
        return <div className="Profile">
            <div>
                <button className="Button Profile__changeName" onClick={this.handleChangeName}>Change Name</button>
                <button className="Button Profile__changePassword" onClick={this.handleChangePassword}>Change Password</button>
                <button className="Button Profile__deleteUser"onClick={this.handleDeleteUser}>Delete user</button>
            </div>
            <div>
                {this.state.view ==='changeName' && <ChangeName onNameChange={this.handleNameChanged}/>}
                {this.state.view ==='changePassword' && <ChangePassword onPasswordChange = {this.handlePasswordChanged}/>}
                {this.state.view ==='deletedUser' && <DeletedUser onDeletedUser={this.handleUserDeleted} />}

            </div>
        </div>
    }
}

