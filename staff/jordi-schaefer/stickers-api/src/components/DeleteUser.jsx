const { Component } = React

class DeleteUser extends Component {

    handleDeleteClick = (event) => {
        event.preventDefault()

        const confirmation = event.target.elemento.value

        deleteUser(sessionStorage.token, confirmation, (error) => {
            if (error) {
                alert(error.message)
                return
            }

            alert('User deleted')
            delete sessionStorage.token
            location.reload()
        })
    }

    render() {
        return <div className="DeleteUser">
        <form className="Container" onSubmit={this.handleDeleteClick}>
            <input className="form" type="password" name="elemento" placeholder=" Confirm your password"/>
            <button className="Button">Delete</button>
        </form>
    </div>
    }
}