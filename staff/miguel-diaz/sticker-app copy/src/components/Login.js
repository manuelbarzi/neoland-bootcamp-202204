class Login extends Component {
    constructor() {
        super(`<div>
            <form class="Container">
                <input class="userinput" type="text" name="username" placeholder="username">
                <input class="userpass" type="password" name="password" placeholder="password">
                <button class="logbutton">Login</button>
                <a href="#">Register</a>
            </form>
        </div>`)
    }

    onUserLoggedIn(callback) {
        const form = this.container.querySelector('form')

        form.addEventListener('submit', function (event) {
            event.preventDefault()

            // const username = form.username.value
            // const password = form.password.value
            const {target: {username: {value: username}, password: {value: password}}} = event

            //callback(username, password)

            authenticateUser(username, password, function (error) {
                if (error) {
                    alert(error.message)

                    return
                }

                sessionStorage.username = username

                callback()
            })
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