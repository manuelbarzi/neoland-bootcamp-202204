
function Login() {
    Component.call(this, `<div class="Login">
        <form class="Login__form">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password">
            <button>Login</button>
            <a href="#" class="Register__a">Register</a>
        </form>
    </div>`)
}

chainPrototypes(Component, Login)


// creo una funcion onSubmit sobre login
Login.prototype.onSubmit = function(callback) {
    const form = this.container.querySelector('form')

    // en caso de click sobre submit
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        //recoge los datos
        const username = form.username.value
        const password = form.password.value
        // y ejecuta la funcion callback
        callback(username, password)
    })
}


// Funcion register
// en caso de click haz la funcion callback
Login.prototype.onRegisterClick = function(callback) {
    const anchor = this.container.querySelector('a')

    anchor.addEventListener('click', function(event) {
        event.preventDefault()

        callback()
    })
}