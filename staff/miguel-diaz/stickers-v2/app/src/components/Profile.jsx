import { Component } from 'react'
import ChangeName from './ChangeName'
import ChangePassword from './ChangePassword'


class Profile extends Component {
    state = { view: null }

    handleChangeNameClick = () => this.setState({ view: 'change-name' })

    handleChangePasswordClick = () => this.setState({ view: 'change-password' })

    render() {
        return <div className="Profile Container">
            <button className="Profile__changeName btn1" onClick={this.handleChangeNameClick}>Change Name</button>
            <button className="Profile__changePassword btn2" onClick={this.handleChangePasswordClick}>Change Password</button>

            {this.state.view === 'change-name' && <ChangeName />}
            {this.state.view === 'change-password' && <ChangePassword />}
        </div>
    }
}

export default Profile

//         let changeName, changePassword

//         const changeNameButton = this.container.querySelector('.Profile__changeName')

//         changeNameButton.addEventListener('click', () => {
//             if (!changeName || !this.has(changeName)) {
//                 changeName = new ChangeName

//                 if (changePassword && this.has(changePassword))
//                     this.remove(changePassword)

//                 this.add(changeName)
//             }
//         })

//         const changePasswordButton = this.container.querySelector('.Profile__changePassword')

//         changePasswordButton.addEventListener('click', () => {
//             if (!changePassword || !this.has(changePassword)) {
//                 changePassword = new ChangePassword

//                 if (changeName && this.has(changeName))
//                     this.remove(changeName)

//                 this.add(changePassword)
//             }
//         })
//     }
// }