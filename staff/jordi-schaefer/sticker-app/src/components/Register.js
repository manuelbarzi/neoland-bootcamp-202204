class Register extends Component {
    constructor () {
        super (`<div>
        <form class="Container">
            <input class="form" type="text" name="name" placeholder="name">
            <input class="form" type="text" name="username" placeholder="username">
            <input class="form" type="password" name="password" placeholder="password">
            <button class="Button">Register</button>
            <a href="#">Login</a>
        </form>
    </div>`)
    }



    onUserRegister(callback) {
        const form = this.container.querySelector('form')

        form.addEventListener('submit', function(event) {
            event.preventDefault()

            const name = form.name.value
            const username = form.username.value
            const password = form.password.value


            registerUser(name, username, password, function (error) {
                if (error) {
                    alert(error.message)  // si hay error me salgo
                    return 
                }
        
                // si no hay error continuo con cambio de pantallas
                callback()
            })
        })
    }



    onLoginClick (callback) {
        const anchor = this.container.querySelector('a')

        anchor.addEventListener('click', function(event) {
            event.preventDefault()

            callback()
        })
    }
}