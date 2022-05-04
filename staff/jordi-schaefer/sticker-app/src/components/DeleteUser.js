class DeleteUser extends Component {
    constructor() {
        super (`<div class="DeleteUser">
        <form class="Container">
            <input class="form" type="password" name="password" placeholder=" Confirm your password">

            <button class="Button">Confirm</button>
        </form>
    </div>`)
    


    this.container.querySelector('form').addEventListener('submit', event => {
        event.preventDefault()

        const password = event.target.name.value

        deleteUser(sessionStorage.username, password, (error) => {
            if (error) {
                alert(error.message)
                return
            }

            alert('User deleted')
        })

    })
    }
}

// despues de borrar el usuario, en la callback de delete user, borraremos el sessionStorage
// delete sessionStorage.username