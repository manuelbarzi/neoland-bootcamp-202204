const { Component } = React

class Profile extends Component {
    state= { view: 'profile' }

    handleChangeName = () => {
        
        this.setState ({ view: 'changeName' })
    }

    handleChangePassword = () =>{

        this.setState ({ view:'changePassword'})
    }

    handleDeleteUser = () => {
        
        this.setState ({ view: 'deletedUser'})
    }

    handleUserDeleted = () => {
        this.setState ({ view: 'login'})
    }

   

    render() {
        return <div className="Profile">
            <div>
                <button className="Button Profile__changeName" onClick={this.handleChangeName}>Change Name</button>
                <button className="Button Profile__changePassword" onClick={this.handleChangePassword}>Change Password</button>
                <button className="Button Profile__deleteUser"onClick={this.handleDeleteUser}>Delete user</button>
            </div>
            <div>
                {this.state.view ==='changeName' && <ChangeName />}
                {this.state.view ==='changePassword' && <ChangePassword />}
                {this.state.view ==='login' && <DeletedUser onDeletedUser={this.handleUserDeleted} />}

            </div>
        </div>
    }



    
}

