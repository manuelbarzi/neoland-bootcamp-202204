class Login extends Component {
    constructor() {
        super(`<div class="LoginAndRegister">
        <form class="form">
            <input class="input" type="text" name="username" placeholder="username">
            <input class="input" type="password" name="password" placeholder="password">
            <button class="button">Log in</button>
            <a href="#" class="button button__light">Register</a>
        </form>
    </div>`)
    }

    onSubmit(callback) {
        const form = this.container.querySelector('form')

        form.addEventListener('submit', function (event) {
            event.preventDefault()

            const username = form.username.value
            const password = form.password.value

            event.target.reset()
            callback(username, password)
        })
    }

    onRegisterClick(callback) {
        const anchor = this.container.querySelector('a')

        anchor.addEventListener('click', function (event) {
            event.preventDefault()

            callback()
        })
    }
}