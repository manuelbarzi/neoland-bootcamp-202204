class Login extends Component {
    constructor () {
        super( `<div>
        <form class="Container">
            <input class="form" type="text" name="username" placeholder="username">
            <input class="form" type="password" name="password" placeholder="password">
            <button class="Button">Login</button>
            <a href="#">Register</a>
        </form>
    </div>`)
    }



    onUserLoggedIn(callback) {
        const form = this.container.querySelector('form')

        form.addEventListener('submit', function(event) {
            event.preventDefault()

            const username = form.username.value
            const password = form.password.value

            // autentifico el usuario, y si no cuadra envio error
            authenticateUser(username, password, function (error) {
                if (error) {
                    alert(error.message)   // si hay error me salgo
                    return
                }
        
                sessionStorage.username = username
                callback()
            })
        })
    }

    onRegisterClick(callback) {
        const anchor = this.container.querySelector('a')

        anchor.addEventListener('click', function(event) {
            event.preventDefault()

            callback()
        })
    }

}