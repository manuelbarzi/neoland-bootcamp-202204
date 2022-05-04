class Login extends Component {
    constructor() {
        super(`<div class="Signin">
            <form class="Login Container">
                <input class="Input Input--light" type="text" name="username" placeholder="username">
                <input class="Input Input--light" type="password" name="password" placeholder="password">
                <button class="Button Button--light">Login</button>
                <a href="#">Register</a>
            </form>
        </div>`)
    }

    onUserLoggedIn(callback) {
        const form = this.container.querySelector('form')
    
        form.addEventListener('submit', function(event) {
            event.preventDefault()
    
            // const username = event.target.username.value
            // const password = event.target.password.value
            const {target: {username: {value: username}, password: {value: password}}} = event
    
            // callback(username, password)
            authenticateUser(username, password, function (error) {
                if (error) {
                    alert(error.message)
        
                    return
                }
        
                sessionStorage.username = username //guardar sesion

                event.target.reset() // para resetear los valores del formulario
    
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


