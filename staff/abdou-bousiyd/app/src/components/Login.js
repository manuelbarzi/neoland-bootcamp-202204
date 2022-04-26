function Login() {
    Component.call(this, `<div class="Login">
        <form class="Login__form">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password">
            <button>Login</button>
            <a href="#">Register</a>
        </form>
    </div>`)
}

chainPrototypes(Component, Login)

Login.prototype.onSubmit = function(callbalck) {
    const form = this.container.querySelector('form')
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        
        const username = form.username.value
        const password = form.password.value
        
        callbalck(username, password)
    })
}

Login.prototype.onRegisterClick = function(callback) {
    const anchor = this.container.querySelector('a')

    anchor.addEventListener('click', function(event) {
        event.preventDefault()

        callback()
    })
}