const root = document.querySelector('#root')

const app = new App
const register = new Register
const login = new Login
let home


if (!sessionStorage.username)
    app.add(login)
else {
    home = new Home

    app.add(home)
}

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

        home = new Home

        login.removeFrom(app)
        home.addTo(app)
    })
})

login.onRegisterClick(function () {
    login.removeFrom(app)
    register.addTo(app)
})