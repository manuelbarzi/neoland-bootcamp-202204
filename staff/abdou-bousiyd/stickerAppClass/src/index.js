const root = document.querySelector('#root')


const app = new App
// const helloWorld = new HelloWorld
const register = new Register
const login = new Login
let home 

// app.add(helloWorld, home)

if(!sessionStorage.username) {
    // app.add(register)
    app.add(login)
}else{
    home = new Home
    app.add(home)
}
root.appendChild(app.container)

register.onUserRegister( () => {
    register.removeFrom(app)
    login.addTo(app)
})

login.onUserLoggedIn(function() {
    home = new Home
    login.removeFrom(app)
    home.addTo(app)
})


login.onRegisterClick( function() {
    login.removeFrom(app)
    register.addTo(app)
})

register.onLoginClick( function() {
    register.removeFrom(app)
    login.addTo(app)

})

