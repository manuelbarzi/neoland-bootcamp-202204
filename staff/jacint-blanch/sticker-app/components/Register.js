class Register extends Component {
    constructor() {
        super(`<div>
            <form class="Container">
                <input class="Input Input--light" type="text" name="name" placeholder="name">
                <input class="Input Input--light" type="text" name="username" placeholder="username">
                <input class="Input Input--light" type="password" name="password" placeholder="password">
                <button class="Button Button--light">Register</button>
                <a href="#">Login</a>
            </form>
        </div>`)
    }

    onUserRegistered(callback) {
        const form = this.container.querySelector('form')

        form.addEventListener('submit', function (event) {
            event.preventDefault()

            const name = form.name.value
            const username = form.username.value
            const password = form.password.value

            //callback(name, username, password)
            registerUser(name, username, password, function (error) {
                if (error) {
                    alert(error.message)

                    return
                }

                callback()
            })
        })
    }

    onLoginClick(callback) {
        const anchor = this.container.querySelector('a')

        anchor.addEventListener('click', function (event) {
            event.preventDefault()

            callback()
        })
    }
}