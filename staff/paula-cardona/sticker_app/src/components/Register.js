//imperativa. como lo hago
class Register extends Component {//prototipo que era el component
    constructor() {
        super(`<div>
            <form class="Container">
                <input type="text" name="name" placeholder="name">
                <input type="text" name="username" placeholder="username">
                <input type="password" name="password" placeholder="password">
                <button>Register</button>
                <a href="#">Login</a>
            </form>
        </div>`)
    }

    onUserRegistered(callback) {       //responsabilidad del submit es recoger los datos y enviar un callback. (lo que hacemos con los datos se decide en el indice)      
        const form = this.container.querySelector('form')

        form.addEventListener('submit', function (event) {
            event.preventDefault()

            // const name = event.target.name.value
            // const username = event.target.username.value
            // const password = event.target.password.value
            const {target: {name : {value : name}, username : {value: username}, password: {value: password}}} = event

            //callback(name, username, password)
            registerUser(name, username, password, function (error) {
                if (error) {
                    alert(error.message)

                    return
                }

                callback()
            })
        })

    }


    onLoginClick(callback) {
        const anchor = this.container.querySelector('a')

        anchor.addEventListener('click', function (event) {
            event.preventDefault()

            callback()
        })

    }
}