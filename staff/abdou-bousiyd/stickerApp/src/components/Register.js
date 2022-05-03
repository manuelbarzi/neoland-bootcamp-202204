function Register() {
    Component.call(this, `<div class="Register">
        <form class="Register__form">
            <input type="text" name="name" placeholder="name">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password">
            <button>Register</button>
            <a href="#">Login</a>
        </form>
    </div>`)
}

chainPrototypes(Component, Register)

Register.prototype.onUserRegister = function(callbalck) {
    const form = this.container.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const name = form.name.value
        const username = form.username.value
        const password = form.password.value
        
        // callbalck(name, username, password)

        registerUser(name, username, password, function(error) {
            if(error) {
                alert(error.message)
                return
            }
            callbalck()
        }) 

        
    })
}

Register.prototype.onLoginClick = function(callback) {
    const anchor = this.container.querySelector('a')

    anchor.addEventListener('click', function(event) {
        event.preventDefault()

        callback()
    })
}