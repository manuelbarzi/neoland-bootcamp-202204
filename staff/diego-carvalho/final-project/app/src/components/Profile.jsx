import { useState } from 'react'
import ChangeName from './ChangeName'
import ChangePassword from './ChangePassword'
import DeleteUser from './DeleteUser'

function Profile() {
    const [view, setView] = useState(null)

    const handleChangeNameClick = () => {
        if(view === 'change-name')
            setView(null)
        else
            setView('change-name' )
    }

    const handleChangePasswordClick = () => {
        if(view === 'change-password')
            setView(null)
        else
            setView('change-password')
    }

    const handleDeleteUserClick = () => {
        if(view === 'delete-user')
            setView(null)
        else
            setView('delete-user')
    }

    return <div className="Container">
            
        <div className='Contaneir__buttons'>
            <button className="Input Profile__changeName" onClick={handleChangeNameClick}>Change Name</button>
                {view === 'change-name' && <ChangeName />}

            <button className="Input Profile__changePassword" onClick={handleChangePasswordClick}>Change Password</button>
                {view === 'change-password' && <ChangePassword />}
    
            <button className="Input Profile__deleteUser" onClick={handleDeleteUserClick}>Delete user</button>
                {view === 'delete-user' && <DeleteUser />} 
        </div>
    </div>
}

export default Profile



// class Profile extends Component {
//     state = { view: null }

//     handleChangeNameClick = () => this.setState({ view: 'change-name' })

//     handleChangePasswordClick = () => this.setState({ view: 'change-password' })

//     handleDeleteUserClick = () => this.setState({ view: 'delete-user' })//no esta bien


//     render() {
        // return <div  className="Container">
            
        //     <div className='Contaneir__buttons'>
        //     <button className="Input Profile__changeName" onClick={this.handleChangeNameClick}>Change Name</button>
        //     {this.state.view === 'change-name' && <ChangeName />}

        //     <button className="Input Profile__changePassword" onClick={this.handleChangePasswordClick}>Change Password</button>
        //     {this.state.view === 'change-password' && <ChangePassword />}
            
        //     <button className="Input Profile__deleteUser" onClick={this.handleDeleteUserClick}>Delete user</button>
        //     {this.state.view === 'delete-user' && <DeleteUser />} 
        //     </div>
        // </div>
//     }
// }

// export default Profile

