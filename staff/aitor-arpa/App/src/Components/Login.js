//  MOLDE DE LOGIN + SUS FUNCIONAMIENTOS



// Creamos una Funcion para crear todo el contenido que va a tenern el componente Login

function Login () {
    Component.call(this, `<div class="Login">
    <form class="Login__form">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password">
            <button>Login</button>
            <a href="#">Register</a>
        </form>
    </div>`)
}
// Cadena de prototypo ¿? asignas que Login es hijo de Component ¿?
// en smart-components esta la funcion que asignara el padre y el hijo 
chainPrototypes(Component,Login)


// Funcion para que recoja los datos username y password en variables una vez que hagamos clic en submit
Login.prototype.onSubmit = function (callback) {
    const form = this.container.querySelector ('form')

    form.addEventListener('submit', function (event) {
        event.preventDefault()

        const username = form.username.value // Recogo el valor por value
        const password = form.password.value

        callback(username, password)
       
    })



}

Login.prototype.onRegisterClick = function (callback) {
    const anchor = this.container.querySelector('a')

    anchor.addEventListener('click', function(event){ // Cuando clickea en el boton de registro 
        event.preventDefault() // Le negamos el comportamiento por defecto para que no refresque solo 

        callback()
    })

}