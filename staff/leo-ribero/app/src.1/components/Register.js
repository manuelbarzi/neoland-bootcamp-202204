// function Register() {
//     Component.call(this, `<div class="Register">
//         <form class="Register__form">
//             <input type="text" name="name" placeholder="name">
//             <input type="text" name="username" placeholder="username">
//             <input type="password" name="password" placeholder="password">
//             <button>Register</button>
//             <a href="#">Login</a>
//         </form>
//     </div>`)
// }


/*
aquí creo la p´gina Register mediante una función
que construye el html mediante .call a partir del template "Component"
*/
function Register(){
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

// chainPrototypes(Component, Register)
chainPrototypes(Component, Register)

// Register.prototype.onSubmit = function(callback) {
//     const form = this.container.querySelector('form')

//     form.addEventListener('submit', function(event) {
//         event.preventDefault()

//         const name = form.name.value
//         const username = form.username.value
//         const password = form.password.value

//         callback(name, username, password)
//     })
// }
Register.prototype.onSubmit = function(callback){
    const form = this.container.querySelector('form')

    form.addEventListener('submit', function(event){
        event.preventDefault()
         const name = form.name.value
         const username = form.username.value
         const password = form.password.value

         callback(name, username, password)
    })
}

// TODO implement onLoginClick method (SEE Login.prototype.onRegisterClick for inspiration)