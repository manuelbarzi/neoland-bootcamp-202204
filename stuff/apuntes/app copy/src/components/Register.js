//imperativa. como lo hago

function Register() { //prototipo que era el component
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
chainPrototypes(Component, Register) //así se encadena los prototipos 


Register.prototype.onSubmit = function(callback){       //responsabilidad del submit es recoger los datos y enviar un callback. (lo que hacemos con los datos se decide en el indice)      
    const form = this.container.querySelector('form')

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        const name = form.name.value
        const username = form.username.value
        const password = form.password.value

        callback(name, username, password)
    })
    
}


Register.prototype.onLoginClick = function(callback) {
    const anchor = this.container.querySelector('a')

    anchor.addEventListener('click', function (event) {
        event.preventDefault()
        
        callback()
    })
    
} 
