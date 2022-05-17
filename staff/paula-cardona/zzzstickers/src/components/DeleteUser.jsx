const { Component } = React

class DeleteUser extends Component {

    state= { view: 'deletedUser' }

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

        this.setState({ view: 'login'})
    }
    

    render() {
        return <div class="DeleteUser">
        <form class="Container">
            <input class="form" type="password" name="elemento" placeholder=" Confirm your password"/>

            <button class="Button"onClick={this.handleDeleteUser}>Delete</button>
        </form>
    </div>
}   }
