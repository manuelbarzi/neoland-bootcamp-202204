var landingView = document.querySelector('.landing')
var loginView = document.querySelector('.login')
var registerView = document.querySelector('.register')
var homeView = document.querySelector('.home')

//landingView.classList.remove('off')
homeView.classList.remove('off')


//     -- Movimiento inicial entre paginas --
var LandingRegisterButton = landingView.querySelector('.start-button')
var LandingLoginButton = landingView.querySelector('.have-button')
var loginBackButton = loginView.querySelector('.back-button')
var registerBackButton = registerView.querySelector('.back-button')

LandingLoginButton.addEventListener('click', function() {
    landingView.classList.add('off')
    loginView.classList.remove('off')
})
LandingRegisterButton.addEventListener('click', function() {
    landingView.classList.add('off')
    registerView.classList.remove('off')
})
loginBackButton.addEventListener('click', function() {
    loginView.classList.add('off')
    landingView.classList.remove('off')
})
registerBackButton.addEventListener('click', function() {
    registerView.classList.add('off')
    landingView.classList.remove('off')
})


// si en la consola escribes una variable, te deberia mostrar lo que selecciona

//     -- funciones de login y Registro--
var loginForm = loginView.querySelector('.form')
var registerForm = registerView.querySelector('form')
loginForm.addEventListener('submit', function(event){
    event.preventDefault()
    //alert("login!")
    //debugger // se utiliza para hacer un brake en javascript
 /*   
    var usernameInput = loginForm.querySelector('input[name=username]')
    var passwordInput = loginForm.querySelector('input[name=password]')
    
    var password = event.target.password.value

    console.log(usernameInput.value, passwordInput.value)

    if (username !== 'user' || password !== '1234')
        alert('user not found')
    else {
        loginView.classList.add('off')
        homeView.classList.remove('off')
    }
*/
    loginView.classList.add('off')
    homeView.classList.remove('off')
})
registerForm.addEventListener('submit', function(event){
    event.preventDefault()
    //alert("register!")
    registerView.classList.add('off')
    loginView.classList.remove('off')
})
