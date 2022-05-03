function Login() {
    Component.call(this, `<div class = "Login">
        <form class = "Login__form">
            <input type = "text" name = "username placeholder = "username">
            <input type = "password" name = "password" placeholder = "password">
            <button>Login</button>
        </form>
    </div>)`)
}

chainPrototypes(Component, Login)