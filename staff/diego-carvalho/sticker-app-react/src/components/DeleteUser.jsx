const {Component} = React

class DeleteUser extends Component{
    render() {
        return <div className="DeleteUser">
        <form className="Container">
            <input className="" type="password" name="password" placeholder="password"/>

            <button className="Delete__button">Delete User</button>
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


