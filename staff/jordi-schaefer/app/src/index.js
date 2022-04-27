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
//app.add(helloWorld, login)
app.add(helloWorld, home)

root.appendChild(app.container)



register.onSubmit(function(name, username, password) {
    const user = { 
        name: name, 
        username: username, 
        password: password 
    }

    users.push(user)
    
    // elmino y añado pantallas de la app con la funcion propia creada
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

// en caso de clicar register, sobre la pagina login: ejecuta la siguiente funcion
login.onRegisterClick(function() {
    login.removeFrom(app)
    register.addTo(app)
})


register.onLoginClick(function() {
    register.removeFrom(app)
    login.addTo(app)
})