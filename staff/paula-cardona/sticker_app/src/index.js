
//como manejar. declarativo, que hago con este información

const root = document.querySelector('#root') //todo lo que vemos al abrir la aplicación aqui

const app = new App
const register = new Register
const login = new Login
let home //como esta en todo el scope no podemos ponerlo en const ya que es muy poco

if (!sessionStorage.username)
    app.add(login)        //camino natural, primero ir al login
else{
    home= new Home

    app.add(home)
}

root.appendChild(app.container)

//TENEMOS QUE SEPARAR LO VISUAL DE LO QUE NO; //LOGICA DE NEGOCIOS, PURA MANIPULACIÓN DE DATOS. 
//A PARTIR DE AHORA INDEX SOLO ES PARA LAS VISTAS
register.onUserRegistered(() => { //necesitamos saber si el usuario existe antes de proceder para que no nos coja el username muchas veces //si existe que te avise que ya existe
    register.removeFrom(app)
    login.addTo(app)
    
})

register.onLoginClick(function () {
    register.removeFrom(app)
    login.addTo(app)
})

login.onUserLoggedIn(() =>{
    home = new Home

    login.removeFrom(app)
    home.addTo(app)
})

login.onRegisterClick(function (){
    login.removeFrom(app)
    register.addTo(app)
})

