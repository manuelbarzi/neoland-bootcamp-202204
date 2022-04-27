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

function authenticateUser(username, password, callback) {
    const matches = users.some(function (user) {
        return user.username === username && user.password === password
    })

    if (!matches) {
        callback(new Error('wrong credentials'))

        return
    }

    callback(null)
}

function retrieveUser(username, callback) {
    const user = users.find(user => user.username === username)

    if (!user) {
        callback(new Error(`user with username ${username} not found`))

        return
    }

    callback(null, user)
}

login.onSubmit(function (username, password) {
    authenticateUser(username, password, function (error) {
        if (error) {
            alert(error.message)

            return
        }

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