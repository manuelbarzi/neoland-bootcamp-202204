class DeleteUser extends Component {
    constructor() {
        super (`<div class="DeleteUser">
        <form class="Container">
            <input class="form" type="password" name="elemento" placeholder=" Confirm your password">

            <button class="Button">Delete</button>
        </form>
    </div>`)
    


    this.container.querySelector('form').addEventListener('submit', event => {
        event.preventDefault()

        const confirmation = event.target.elemento.value

        deleteUser(sessionStorage.username, confirmation, (error) => {
            if (error) {
                alert(error.message)
                return
            }

            alert('User deleted')
            delete sessionStorage.username
            location.reload()
        })

    })
    }
}