class DeleteUser extends Component {
    constructor() {
        super(`<div class="DeleteUser Profile--form">
            <form class="Container">
                <input class="Input Input--light" type="password" name="element" placeholder="Confirm password">
                <button class="Button">Delete User</button>
            </form>
        </div>`)

        this.container.querySelector('form').addEventListener('submit', event => {
            event.preventDefault()

            const confirmation = event.target.element.value

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