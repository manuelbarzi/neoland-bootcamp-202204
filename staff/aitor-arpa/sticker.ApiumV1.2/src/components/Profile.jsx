const { Componet } = React
 
class Profile extends Component {
    state = {view:'sticker'}
    handelChangeName = () => {
        this.setState({view:'ChangeName'})
    }
    handelChangePassword = () => {
        this.setState({view:'ChangePass'})
    }
    handelDeleteUser = () => {
        this.setState({view:'Delete'})
    }
    
render() {
            
    return <div className="Profile">
        <button className="Profile__changeName" onClick={this.handelChangeName}>Change Name</button>
        
        <button className="Profile__changePassword" onClick={this.handelChangePassword}>Change Password</button>
        <button className="Profile__deleteUser" onClick={this.handelDeleteUser}>Delete User</button>
        {this.state.view === 'ChangeName' && <ChangeName />}
        {this.state.view === 'ChangePass' && <ChangePassword />}
        {this.state.view === 'Delete' && <Delete />}
    </div>
    }
}

    
   

