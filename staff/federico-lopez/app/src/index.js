const root = document.querySelector('#root')

const app = new App
const helloWorld = new HelloWorld
const register = new Register
const login = new Login
const home = new Home

//app.add(helloWorld)
//app.add(login)
app.add(helloWorld, login)
// app.add(helloWorld, home)

root.appendChild(app.container)

register.onSubmit(function(name, username, password) {
    const user = { 
        name: name, 
        username: username, 
        password: password 
    }

    users.push(user)

    register.removeFrom(app)
    login.addTo(app)
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

login.onRegisterClick(function() {
    login.removeFrom(app)
    register.addTo(app)
})