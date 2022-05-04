
function Register () {
    Component.call (this,`<div class ='Register'>
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


Register.prototype.onSubmit = function( callback) {
    const form = this.container.querySelector ('form') // le paso a la variable form, el paquete HTML del form

    form.addEventListener ('submit', function (event){  // le doy funcion de escucha al boton submit
        event.preventDefault()

        const name = form.name.value  // me guardo los datos del formulario en una variable
        const username = form.username.value
        const password = form.password.value

        callback(name, username, password) // y se los paso a la funcion callback para que los guarde
    })
}



Register.prototype.onLoginClick = function(callback) { // Defino la funcion con el nombre onclick para referenciar que metodo voy a usar
    const anchor = this.container.querySelector('a') // Seleciono por ancor (a)  

    anchor.addEventListener('click', function (event) { // Cuando escuche el cilck 
        
        event.preventDefault() // prevenimos el comportamiento por defecto
        callback()  // realizo la funcion callback definida en index.js
    })
}


