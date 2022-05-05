class DeleteUser extends Component{
    constructor() {
        super(`<div class="DeleteUser">
        <form classe="Container">
            <input class="" type="password" name="password" placeholder="password"></input>

            <button class"Delete__button">Delete User</button>
        </form>
    </div>`)
    

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
    })  
}
}



