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

            //const username = form.username.value
            //const password = form.password.value
            //const username = event.target.username.value
            //const password = event.target.password.value
            const {target: {username: {value: username}, password: {value: password}}} = event
            // Destructuring: sobre la linea de arriba extrsigo propiedades hasta llegar al valor, y luego le doy el nombre que me interesa
            // destructuring para valores de objeto, nos devuelve una copia, y no el orginal
            

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