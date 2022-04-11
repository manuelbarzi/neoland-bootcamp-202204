var landingView = document.querySelector('.landing-view')
var registerView = document.querySelector('.sign-up-view')
var logInView = document.querySelector('.log-in-view')
var homeView = document.querySelector('.home')

// landingView.classList.remove('off')
homeView.classList.remove('off')

var landingRegisterButton = document.querySelector('.button-sign-up-landing-view')
var landingLogInButton = document.querySelector('.botton-log-in-landing-view')


landingRegisterButton.addEventListener('click', function() {
    landingView.classList.add('off')
    registerView.classList.remove('off')})

var registerAlreadyRegisteredButton = document.querySelector('.button-already-registered')

registerAlreadyRegisteredButton.addEventListener('click', function() {
    registerView.classList.add('off')
    logInView.classList.remove('off')
})

landingLogInButton.addEventListener('click', function(){
    landingView.classList.add('off')
    logInView.classList.remove('off')
})

var loginNotRegisteredButton = document.querySelector('.button-not-registered')

loginNotRegisteredButton.addEventListener('click', function(){
    logInView.classList.add('off')
    registerView.classList.remove('off')
})

var loginForm = logInView.querySelector('form')

loginForm.addEventListener('submit', function(event){
    event.preventDefault()
    var emailUser = event.target.email.value
    var passwordUser = event.target.password.value
    logInView.classList.add('off')
    homeView.classList.remove('off')
})

var registerForm = registerView.querySelector('form')

registerForm.addEventListener('submit', function(event) {
    event.preventDefault()
    registerView.classList.add('off')
    logInView.classList.remove('off')
})