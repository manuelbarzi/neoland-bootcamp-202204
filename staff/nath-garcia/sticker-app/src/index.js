const root = document.querySelector('#root')

const app = new App
const helloWorld = new HelloWorld
const register = new Register
const login = new Login
const home = new Home


// miro si hay datos guardados en session estorage
if (!sessionStorage.username)  // doble negacion, por lo tanto cumple la condicion
    app.add(helloWorld, login) // si no hay me voy a hello world
else
    app.add(helloWorld, home) // si hay entro directo al home


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


        sessionStorage.username = username // guardo el username en sessionStorage
        

        retrieveUser(username, function(error, user) {
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