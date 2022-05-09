const root = document.querySelector('#root')

const app = new App
const register = new Register
const login = new Login
let home


/** Primero las vistas: sessionStorage almacena información mientras la pestaña donde se esté utilizando siga abierta. Por lo tanto, si cerramos pestaña veremos el login form; si solo refrescamos, continuaremos en la sesión del usuario.  */
if (!sessionStorage.username)
    app.add(login)
else {
    home = new Home

    app.add(home)
}

root.appendChild(app.container)

register.onUserRegistered(() => {
    register.removeFrom(app)
    login.addTo(app)
})

register.onLoginClick(function () {
    register.removeFrom(app)
    login.addTo(app)
})

login.onUserLoggedIn(() => {
    home = new Home
    
    login.removeFrom(app)
    home.addTo(app)
})

login.onRegisterClick(function () {
    login.removeFrom(app)
    register.addTo(app)
})