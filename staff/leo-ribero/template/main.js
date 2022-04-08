var landingView = document.querySelector('.landing')
var loginView = document.querySelector('.login')
var registerView = document.querySelector('.register')
var homeView = document.querySelector('.home')


// ********************************* JS LANDING  porque landingView.querySelector
// Estando en landingView, al ir a LOGIN    apago la vista incial landigView y enciendo loginView
//    y
// Estando en landingView, al ir a REGISTER apago la vista incial landigView y enciendo registerView
var landingLoginAnchor = landingView.querySelector('.login-anchor')
landingLoginAnchor.addEventListener('click', function(){
	landingView.classList.add('off')
	loginView.classList.remove('off')
})
var landingRegisterAnchor = landingView.querySelector('.register-anchor')
landingRegisterAnchor.addEventListener('click', function(){
    landingView.classList.add('off')
    registerView.classList.remove('off')
})


// ********************************* JS LOGIN  porque loginView.querySelector
// Estando en loginView, al ir a LOGIN ahora es un botón que hace submit
// Estando en loginView, al ir a REGISTER apago la vista loginView y enciendo registerView
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



// ESTA ES LA VISTA ACTIVA INICIAL
landingView.classList.remove('off')
// loginView.classList.remove('off')
// registerView.classList.remove('off')
// homeView.classList.remove('off')

