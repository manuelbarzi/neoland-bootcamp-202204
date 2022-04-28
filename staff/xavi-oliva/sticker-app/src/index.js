const root = document.querySelector('#root')

const app = new App
const helloWorld = new HelloWorld
const register = new Register
const login = new Login
const home = new Home


/** Primero las vistas: sessionStorage almacena información mientras la pestaña donde se esté utilizando siga abierta. Por lo tanto, si cerramos pestaña veremos el login form; si solo refrescamos, continuaremos en la sesión del usuario.  */
if (!sessionStorage.username)
    app.add(helloWorld, login)
else 
    app.add(helloWorld, home)

root.appendChild(app.container)

register.onSubmit(function (name, username, password) {
    registerUser(name, username, password, function (error) {
        if (error) {
            alert(error.message)

            return
        }

        register.removeFrom(app)
        login.addTo(app)
    })
})

register.onLoginClick(function () {
    register.removeFrom(app)
    login.addTo(app)
})

login.onSubmit(function (username, password) {
    authenticateUser(username, password, function (error) {
        if (error) {
            alert(error.message)

            return
        }

        sessionStorage.username = username

        retrieveUser(username, function (error, user) {
            if (error) {
                alert(error.message)

                return
            }

            home.setName(user.name)

            login.removeFrom(app)
            home.addTo(app)
        })
    })

})

login.onRegisterClick(function () {
    login.removeFrom(app)
    register.addTo(app)
})