//como manejar. declarativo, que hago con este información

const root = document.querySelector('#root')

const app = new App()
const helloWorld = new HelloWorld()
const register = new Register()
const login = new Login
const home = new Home


app.add(helloWorld, login)
//app.add(helloWorld, home)

root.appendChild(app.container)


//TENEMOS QUE SEPARAR LO VISUAL DE LO QUE NO; //LOGICA DE NEGOCIOS, PURA MANIPULACIÓN DE DATOS. 
register.onSubmit(function(name, username, password) { //necesitamos saber si el usuario existe antes de proceder para que no nos coja el username muchas veces //si existe que te avise que ya existe
    registerUser(name, username, password, function(error){
        if(error){
            alert(error.message)

            return
        }

    register.removeFrom(app)
    login.addTo(app)
    })
})

register.onLoginClick(function() {
    register.removeFrom(app)
    login.addTo(app)
})


login.onSubmit(function(username, password) {
    const matches = users.some(function(user) { 
        return user.username === username && user.password === password
    })

    if (matches) {
        const user = users.find(user => user.username === username)

        home.setName(user.name)

        login.removeFrom(app)
        home.addTo(app)

    } else alert('wrong credentials')
})

register.onLoginClick(function() {
    register.removeFrom(app)
    login.addTo(app)
})

login.onRegisterClick(function() {
    login.removeFrom(app)
    register.addTo(app)
})

