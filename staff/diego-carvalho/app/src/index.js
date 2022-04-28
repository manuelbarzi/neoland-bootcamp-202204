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

//using the function (onSumit)previous created to save the values (datos manipulation)
register.onSubmit(function (name, username, password) {

    registerUser(name, username, password, function(error){

        if(error){
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
//authentication of the user
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
//register of the user
function registerUser(name, username, password, callback) {
    //Dentro del array users, verifica si hay algun objeto cuya propiedad username sea igual al parámetro username
    //Si es así, devuelve 'true'. Si no es así, devuelve false
    const exists = users.some(user => user.username === username)

    if (exists) {//the test will work if exists is true, so we use !exists (its different of true) to define it.
        callback(new Error('username already exists'))

        return
    }

    const user = {
        name,
        username,
        password
    }

    users.push(user)

    callback(null)
}

login.onSubmit(function (username, password) {//cretaing a function 
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








