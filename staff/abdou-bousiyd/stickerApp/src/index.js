const root = document.querySelector('#root')


const app = new App
// const helloWorld = new HelloWorld
const register = new Register
const login = new Login
let home 

// app.add(helloWorld, home)

if(!sessionStorage.username) {
    app.add(login)
}else{
    home = new Home
    app.add(home)
}
root.appendChild(app.container)

register.onSubmit( (name, username, password) => {
    registerUser(name, username, password, function(error) {
        if(error) {
            alert(error.message)
            return
        }
        register.removeFrom(app)
        login.addTo(app)
    }) 
})

login.onSubmit(function(username, password) {
    authenticateUser(username, password, function(error) {
        if (error) {
            alert(error.message)
            return
        }
        sessionStorage.username = username
        retrieveUser(username, function(error, user) {
            if (error) {
                alert(error.message)
                return
            }
            const home = new Home

            home.setName(user.name)
            login.removeFrom(app)
            home.addTo(app)
        })
    })
})


login.onRegisterClick( function() {
    login.removeFrom(app)
    register.addTo(app)
})

register.onLoginClick( function() {
    register.removeFrom(app)
    login.addTo(app)

})

