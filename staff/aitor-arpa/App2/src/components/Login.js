class Login extends Component {
    constructor(){
        super(`<div>
        <form class="Container">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password">
            <button>Login</button>
            <a href="#">Register</a>
        </form>
    </div>`)}



onUserLoggedIn(callback) {
    const form = this.container.querySelector('form')

    form.addEventListener('submit', function (event) {
        event.preventDefault()

       /*  const username = event.target.username.value
        const password = event.target.password.value */
        const {target: {username: {value: username}, password: {value:password}}} = event

        // callback(username, password)
        authenticateUser(username, password, function (error) {
            if (error) {
                alert(error.message)

                return
            }

            sessionStorage.username = username
            event.target.reset()

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
}}
