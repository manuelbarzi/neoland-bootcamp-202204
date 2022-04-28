//como manejar. declarativo, que hago con este información

const root = document.querySelector('#root')

const app = new App
const helloWorld = new HelloWorld
const register = new Register
const login = new Login
const home = new Home

if (!sessionStorage.username)
    app.add(helloWorld, login)        //camino natural, primero ir al login
else
    app.add(helloWorld, home)

root.appendChild(app.container)

//TENEMOS QUE SEPARAR LO VISUAL DE LO QUE NO; //LOGICA DE NEGOCIOS, PURA MANIPULACIÓN DE DATOS. 
register.onSubmit(function (name, username, password) { //necesitamos saber si el usuario existe antes de proceder para que no nos coja el username muchas veces //si existe que te avise que ya existe
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

        retrieveUser(username, function(error, user) { //retrive coger
            if (error) {
                alert(error.message)

                return
            }

            home.setName(user.name) //set es colocar.coloca el username a home
    
            login.removeFrom(app)
            home.addTo(app)
        })
    })

})

login.onRegisterClick(function () {
    login.removeFrom(app)
    register.addTo(app)
})