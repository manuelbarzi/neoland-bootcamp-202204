// la almohadilla hace referencia al id del html
const root = document.querySelector('#root')


// creo objetos para cada pagina
// con su contenido html y unidos a Component
const app = new App()
const register = new Register()
const login = new Login
let home


// miro si hay datos guardados en session estorage
if (!sessionStorage.username)
    app.add(login) // si no hay me voy a hello world
else {
    home = new Home
    app.add(home) // si hay entro directo al home
}

// uno la app con mi raiz de html
root.appendChild(app.container)


register.onUserRegister( () => {
    register.removeFrom(app)
    login.addTo(app)
})


login.onUserLoggedIn( () => {
    home = new Home
    login.removeFrom(app)
    home.addTo(app)
})


register.onLoginClick(function () {
    register.removeFrom(app)
    login.addTo(app)
})

login.onRegisterClick(function () {
    login.removeFrom(app)
    register.addTo(app)
})

