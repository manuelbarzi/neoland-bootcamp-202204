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
//using the function (onSumit)previous created to save the values 
register.onSubmit(function (name, username, password) {
    const user = {
        name: name,
        username: username,
        password: password
    }

    users.push(user)//pushing the submit values to the const user.

    register.removeFrom(app)//remove register from app(constructor) to, in a click, close the register page 
    login.addTo(app)//add login to app (constructor), in a click, close the resgister page and add login page.
})

register.onLoginClick(function () {
    register.removeFrom(app)
    login.addTo(app)
})

login.onSubmit(function (username, password) {
    const matches = users.some(function (user) {//some method to check the username and password previous resgistered is true or false.
        return user.username === username && user.password === password
    })

    if (matches) {
        const user = users.find(user => user.username === username)// the find method return the username  if its match.

        home.setName(user.name)

        login.removeFrom(app)//method to, in a click, close the login page 

        home.addTo(app)//method to, in a click, close the login page and add home page.
    } else alert('wrong credentials')//alert if something is wrong
})

//if something is wrong, clicking on the register anchor (<a>)...  
login.onRegisterClick(function () {
    login.removeFrom(app)//...removeFrom method will close the login page
    register.addTo(app)//...and addTo method will add register page.
})








