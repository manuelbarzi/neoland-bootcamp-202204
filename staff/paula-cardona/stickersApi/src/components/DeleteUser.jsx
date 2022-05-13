const { Component } = React

class DeleteUser extends Component {


    handleDeleteUser = event => {
        const confirmation = event.target.elemento.value

        deleteUser(sessionStorage.username, confirmation, (error) => {
            if (error) {
                alert(error.message)
                return
            }

            alert('User deleted')
            delete sessionStorage.username
            location.reload() //refresca la página donde estan
        })

    }
    

    render() {
        return <div class="DeleteUser">
        <form class="Container" onSubmit={this.handleDeleteUser}>
            <input class="form" type="password" name="elemento" placeholder=" Confirm your password"/>

            <button class="Button">Delete</button>
        </form>
    </div>
}   }
