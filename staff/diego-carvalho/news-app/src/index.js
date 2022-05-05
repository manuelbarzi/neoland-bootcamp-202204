const root = document.querySelector('#root')//root is the container HTML where all JS files are saved.

//child elements of components
const app = new App
const helloWorld = new HelloWorld
const register = new Register
const login = new Login
const home = new Home

//app.add(helloWorld)
//app.add(login)
//app.add(helloWorld, login)
app.add(helloWorld, login)

root.appendChild(app.container)

register.onSubmit(function (name, username, password) {
    registerUser(name, username, password, function (error) {

        if (error) {
            alert(error.message)

            return
        }
        //visualization
        register.removeFrom(app)//remove register from app(constructor) to, in a click, close the register page 
        login.addTo(app)//add login to app (constructor), in a click, close the resgister page and add login page.
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

        registerUser(username, function (error, user) {
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
//if something is wrong, clicking on the register anchor (<a>)...  
login.onRegisterClick(function () {
    login.removeFrom(app)//...removeFrom method will close the login page
    register.addTo(app)//...and addTo method will add register page.
})








