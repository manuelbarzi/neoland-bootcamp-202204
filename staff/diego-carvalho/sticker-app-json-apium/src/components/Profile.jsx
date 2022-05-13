const {Component} = React

class Profile extends Component {
    constructor(){
        super()

        this.logger = new Logger('Profile')

        this.logger.info('constructor')
    }

    state ={view: null}

    handleChangeNameButtonClick = () => {

        this.setState({view:'changeName'})
    }

    handleChangePasswordButtonClick = () => {

        this.setState({view: 'changePassword'})
    }

    handleDeleteUserButtonClick = () => {

        this.setState({view: 'deleteUser'})
    }

    render() {
        this.logger.info('render')
        
        return <div className="Profile">
        
            <button className="Profile__changeName" onClick={this.handleChangeNameButtonClick}>Change Name</button>
            <button className="Profile__changePassword" onClick={this.handleChangePasswordButtonClick}>Change Password</button>
            
            <div>
            <button className="Profile__deleteUser" onClick={this.handleDeleteUserButtonClick}>Delete User</button>
            </div>

            {this.state.view === 'changeName' && <ChangeName />} 
            {this.state.view === 'changePassword' && <ChangePassword />}
            {this.state.view === 'deleteUser' && <DeleteUser />}  
            
        </div>
    }
}


/*let changeName, changePassword, deleteUser

    const changeNameButton = this.container.querySelector('.Profile__changeName')

    changeNameButton.addEventListener('click', () => {
        if (!changeName || !this.has(changeName)) {
            changeName = new ChangeName

            if (changePassword && this.has(changePassword))
                this.remove(changePassword)

            else if (deleteUser && this.has(deleteUser))
                this.remove(deleteUser)

            this.add(changeName)
        }
    })

    const changePasswordButton = this.container.querySelector('.Profile__changePassword')

    changePasswordButton.addEventListener('click', () => {
        if (!changePassword || !this.has(changePassword)) {
            changePassword = new ChangePassword

            if (changeName && this.has(changeName))
                this.remove(changeName)

            else if (deleteUser && this.has(deleteUser))
                this.remove(deleteUser)

            this.add(changePassword)
        }
    })

    const deleteButton = this.container.querySelector('.Profile__deleteUser')

    deleteButton.addEventListener('click', () => {
        if (!deleteUser || !this.has(deleteUser)) {
            deleteUser = new DeleteUser

            if (changeName && this.has(changeName))
                this.remove(changeName)

            else if (changePassword && this.has(changePassword))
                this.remove(changePassword)

            this.add(deleteUser)

        }
    }) */





