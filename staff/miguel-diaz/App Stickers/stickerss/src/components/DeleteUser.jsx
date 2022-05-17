const { Component } = React

class DeleteUser extends Component {

    handleDeleteClick = (event) => {
        event.preventDefault()

        const confirmation = event.target.element.value

        deleteUser(sessionStorage.username, confirmation, (error) => {
            if (error) {
                alert(error.message)
                return
            }

            // alert('User deleted')
            // delete sessionStorage.username
            // location.reload()
        })
    }

    render() {
        return <div className="DeleteUser">
        <form className="Container" onSubmit={this.handleDeleteClick}>
            <input className="form" type="password" name="element" placeholder=" Confirm your password"/>
            <button className="Button">Delete</button>
        </form>
    </div>
    }
}







// const { Component } = React

// class DeleteUser extends Component {
//     handleFormSubmit = event => {
//         event.preventDefault()
    
//         deleteUserFun(this.props.username, (error) => {
//             if (error) 
//                 alert(error.message)
//         })

//         delete sessionStorage.username
//         this.props.onDeletedUser()
//     }

//     render() {
//         return <div className="DeleteUser">
//         <form className="Profile__form" onSubmit={this.handleFormSubmit}>
//             <h2>Delete User</h2>
//             <input type="password" name="password" id="password" placeholder="password" />
//             <button type="submit" className="SubmitButton button button__light">Save</button>
//         </form>
//     </div>
//     }
// }