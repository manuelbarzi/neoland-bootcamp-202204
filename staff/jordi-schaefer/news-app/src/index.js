// la almohadilla hace referencia al id del html
const root = document.querySelector('#root')


// creo objetos para cada pagina
// con su contenido html y unidos a Component
const app = new App()
const helloWorld = new HelloWorld()
const register = new Register()
const login = new Login
const home = new Home


// añado hello y login dentro de app con una funcion propia creada en smart-components
app.add(helloWorld, login)
//app.add(helloWorld, home)

root.appendChild(app.container)



register.onSubmit(function(name, username, password) {

    // llamo a la funcion register, registra el usuario o en caso contrario envia error
    registerUser(name, username, password, function (error) {
        if (error) {
            alert(error.message)  // si hay error me salgo
            return 
        }

        // si no hay error continuo con cambio de pantallas
        register.removeFrom(app)
        login.addTo(app)
    })
})



login.onSubmit(function(username, password) {

    // autentifico el usuario, y si no cuadra envio error
    authenticateUser(username, password, function (error) {
        if (error) {
            alert(error.message)   // si hay error me salgo
            return
        }

        // si no hay error --------------------------------------------------------------- ??
        retrieveUser(username, function(error, user) {
            if (error) {
                alert(error.message)  // si hay error me salgo
                return
            }

            // continuo con la entrada a home
            home.setName(user.name)
            login.removeFrom(app)
            home.addTo(app)
        })
    })
})



// en caso de clicar register, sobre la pagina login: ejecuta la siguiente funcion
login.onRegisterClick(function() {
    login.removeFrom(app)
    register.addTo(app)
})


register.onLoginClick(function() {
    register.removeFrom(app)
    login.addTo(app)
})