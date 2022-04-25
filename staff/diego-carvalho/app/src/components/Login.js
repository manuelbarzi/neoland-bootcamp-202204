function Login() {// function Login with attributes
    Component.call(this, `<div class="Login">
        <form class="Login__form">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password">
            <button>Login</button>
            <a href="#">Register</a>
        </form>
    <div>` )
}

chainPrototypes(Component, Login)//calling the chainprototype with parent(Component) and child(Login)

Login.prototype.onSumit = function(callback) {//onSumit
    const form = this.container.querySelector('form')

    form.addEventListener('sumit', function(event){//The method addEventListener() works by adding a function, to the list of event listeners .
        event.preventDefault()

        const username = form.username.value
        const password = form.password.value

        callback(username, password)
    })

    Login.prototype.onRegisterClick = function(callback) {//function callback that add the eventListener to the click funtion on the anchor (<a>)
        const anchor = this.container.querySelector('a')

        anchor.addEventListener('click', function(event){
            event.preventDefault()

            callback()
        })


    }
}