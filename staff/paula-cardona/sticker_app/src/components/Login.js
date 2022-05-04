class Login extends Component{//EMPEZAMOS CON DIV YA QUE EN APP TENEMOS PUESTO MAIN Y TODOS LOS COMPONENTS SON DIV
    constructor(){
        super(`<div> 
            <h1 class="h1"> STICKER CREATOR </h1>
            <form class="Container">
                <input type="text" name="username" placeholder="username">
                <input type="password" name="password" placeholder="password">
                <button>Login</button>
                <a href="#">Register</a>
                </form>
            </div>`)
    }


    onUserLoggedIn(callback) { //ya ha pasado el logged
        const form = this.container.querySelector('form')

        form.addEventListener('submit', function(event) {
            event.preventDefault()  //prevenir el comportamiento de luego

            // const username = event.target.username.value
            // const password = event.target.password.value
            const {target: {username : {value: username}, password: {value: password}}} = event

            //callback(username, password)

            authenticateUser(username, password, function (error) {
                if (error) {
                    alert(error.message)

                    return
                }

                sessionStorage.username = username
                
                event.target.reset()

            
                callback() //este callback le da permiso a que el indice cambie las vistas
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