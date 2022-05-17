const {Component} = React

class DeleteUser extends Component{
    handleFormSubmit = event => {
        event.preventDefault()

        const password = event.target.password.value

        deleteUser(sessionStorage.username, password, error => {
            if(error) {
                alert(error.message)

                return
            }
            alert('User has been deleted')

        })
    }

    handleDeleteUserButtonClick = () => {
        delete sessionStorage.username
        location.reload()
        
    }

    render() {
        return <div className="DeleteUser">
        <form className="Container" onSubmit={this.handleFormSubmit}>
            <input className="" type="password" name="password" placeholder="password"/>

            <button className="Delete__button" onClick={this.handleDeleteUserButtonClick}>Delete User</button>
        </form>
    </div>
}
}



/*
    this.container.querySelector('form').addEventListener('submit', event => {
        event.preventDefault()

        const passwordToDelete = event.target.password.value

        deleteUser(sessionStorage.username, passwordToDelete, error => {
            if(error) {
                 alert(error.massage)

                return
            }
            alert('User has been deleted')
            delete sessionStorage.username
            location.reload()
        })       
    })   */


