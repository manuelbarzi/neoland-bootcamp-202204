class Register extends Component {
    constructor() {
        super(`<div class="LoginAndRegister">
        <form class="form">
            <input class="input" type="text" name="name" placeholder="name">
            <input class="input" type="text" name="username" placeholder="username">
            <input class="input" type="password" name="password" placeholder="password">
            <button class="button">Register</button>
            <a class="button button__light" href="#">Login</a>
        </form>
    </div>`)
    }

    onSubmit(callback) {
        const form = this.container.querySelector('form')

        form.addEventListener('submit', function (event) {
            event.preventDefault()

            const name = form.name.value
            const username = form.username.value
            const password = form.password.value

            callback(name, username, password)
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