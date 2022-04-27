// En este archivo DECIDIMOS QUE VASMO A HACER CON LOS DATOS RECOGIDOS 


const root = document.querySelector('#root')

const app = new App
const helloWorld = new HelloWorld
const register = new Register
const login = new Login
const home = new Home

app.add(helloWorld, login)
//app.add(helloWorld, home)

root.appendChild(app.container)

// FUNCION DECLARATIVA     Elegimos que hacemos con los datos pasados por las callback
register.onSubmit(function (name, username, password) { // Cuando se hace click en el boton  en la pagina registe recivimos los parametros
    const user = {  // Declaro variable user para recoger  los inputs por su nombre
        name: name,
        username: username,  /// propiedad : nombre del valor ---> recogemos el value
        password: password
    }

    users.push(user) // con el metodo push los enviamos a nuesta base de Datos en Memoria ( data.js )

    register.removeFrom(app)  // cambiamos la vista
    login.addTo(app)
})


login.onSubmit(function (username, password) {  // Funcion DECLARATIVA de Nuesto Metodo onSumbmit que nos pasana 2 parametros usarname y password
    authenticateUser (username, password, function (error) {
        if (error) {
            alert (error.message)
            return 
        } 

        retriveUser(username,function(error,user) {
            if(error) {
                alert(error.message)
                return
            }

            home.setName(user.name)

            login.removeFrom(app)
            home.addTo(app)           
        })
    })      
})


// CAMBIOS DE VISTSAS AL HACER CLICK EN REGISTO
login.onRegisterClick(function() {
    login.removeFrom(app)
    register.addTo(app)
})

register.onLoginClick(function() {
    register.removeFrom(app)
    login.addTo(app)
})
