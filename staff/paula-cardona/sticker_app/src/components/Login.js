function Login() {
    Component.call(this, `<div>
    <h1 class= h1> STICKER CREATOR </h1>
    <form class="Container">
        <input type="text" name="username" placeholder="username">
        <input type="password" name="password" placeholder="password">
        <button>Login</button>
        <a href="#">Register</a>
        </form>
    </div>`)
} //con el que construimos todos los componentes y le pasamos el string que es mi plantilla a través de la call de el mismo

chainPrototypes(Component, Login) //encadenamos el login (que es el child), con el component para que lo herede

Login.prototype.onSubmit = function(callback) {
    const form = this.container.querySelector('form')

    form.addEventListener('submit', function(event) {
        event.preventDefault()  //prevenir el comportamiento de luego

        const username = form.username.value
        const password = form.password.value

        callback(username, password)
    })
}

Login.prototype.onRegisterClick = function(callback) {
    const anchor = this.container.querySelector('a')

    anchor.addEventListener('click', function(event) {
        event.preventDefault()

        callback()
    })
}


