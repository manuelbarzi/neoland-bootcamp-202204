var landingView = document.querySelector('.landing')
var loginView = document.querySelector('.login')
var registerView = document.querySelector('.register')
var homeView = document.querySelector('.home')


// ********************************* JS LANDING  porque landingView.querySelector
// Estando en landingView, al ir a LOGIN    apago la vista incial landigView y enciendo loginView
//    y
// Estando en landingView, al ir a REGISTER apago la vista incial landigView y enciendo registerView

// ¿como?:
// Declarando la variable "landingLoginAnchor" que a través de querySelector (desde landingView) para localice mi objeto con la clase "login-ancor"
//  y entonces le añado un "escuchador de evento" para "click" para que ejecute una función (anónima) que apaga la vista "landingView" 
// y enciende la vista "loginView"
var landingLoginAnchor = landingView.querySelector('.login-anchor')
landingLoginAnchor.addEventListener('click', function(){
	landingView.classList.add('off')
	loginView.classList.remove('off')
})

// Si el código anterior instruye las accions del boton "login", ahora vamos a las instrucciones para el botón "Register"
// Declaro la variable "landingRegisterAnchor" igual que el anterior, te lleva de landingView a registerView
var landingRegisterAnchor = landingView.querySelector('.register-anchor')
landingRegisterAnchor.addEventListener('click', function(){
    landingView.classList.add('off')
    registerView.classList.remove('off')
})


// ********************************* JS LOGIN  porque loginView.querySelector
// Estando en loginView, al ir a LOGIN ahora es un botón que hace submit. NO HACEMOS JS para este boton LOGIN (Continuar)
// Estando en loginView, al ir a REGISTER apago la vista loginView y enciendo registerView
// Declaramos la variable "loginRegisterAnchor" para el enlace a la vista registerView
// apagando loginView y encendiendo registerView
var loginRegisterAnchor = loginView.querySelector('.register-anchor')
loginRegisterAnchor.addEventListener('click', function(){
    loginView.classList.add('off')
    registerView.classList.remove('off')
})


// ********************************* JS REGISTER  porque registerView.querySelector
// Estando en registerView, al ir a LOGIN    apago la vista registerView y enciendo loginView
// Estando en registerView, al ir a REGISTER ahora es un botón que hace submit
var registerLoginAnchor = registerView.querySelector('.login-anchor')
registerLoginAnchor.addEventListener('click', function(){
    registerView.classList.add('off')
    loginView.classList.remove('off')
} )


// > ACCEDIENDO A LA VISTA HOME DESDE LA VISTA LOGIN
// El usuario accede a la vista home haciendo login. El botón por defecto tiene un evento 'submit'
// que tiene varios comportamientos por defecto, uno de los cuales es recargar la página si esta 'tonto' o 
// eso creo entender, de ahí que usemos preventDefault.

// La idea es que a través de el botón vaya a la home pero antes, de momento, validaremos una única combinación correcta 
// de usuario + contraseña que si no es correcta muestra un alert "wrong credentials"

// Entonces:
// declaro una variable que llamaré "loginViewloginForm", estando en loginView que a través de
// querySelector encuentre mi objeto "form" que exista en la vista login y le añado un "escuchador de evento" para "submit"

var loginViewloginForm = loginView.querySelector('form')
// a diferencia de click, con submit hay que poner el parametro "event" a la función. No se la razón ????????????????????????
loginViewloginForm.addEventListener('submit', function(event){
    event.preventDefault()
    // luego, declaro dos variables para gestionar los datos almacenados tanto en:
    // el input con clase "inputcls" cuyo "name" es "userName"
    // como en el input con clase "inputcls" y cuyo "name" es "yourPassword"
    var inputUserName = loginViewloginForm.querySelector('inputc[name=yourusername]')
    var inputYourPassword = loginViewloginForm.querySelector('inputc[name=yourpassword]')

    var user = inputUserName.value 
    var key = inputYourPassword.value

    if(user !== 'pepito' || key !== '123456'){
        alert('Algo no funciona, no reconocemos tu usuario y/o contraseña')
        return
    }
    loginView.classList.add('off')
    homeView.classList.remove('off')


})

// A continuación 


// ESTA ES LA VISTA ACTIVA INICIAL
landingView.classList.remove('off')
// loginView.classList.remove('off')
// registerView.classList.remove('off')
// homeView.classList.remove('off')

