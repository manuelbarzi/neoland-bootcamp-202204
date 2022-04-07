var landingView = document.querySelector('.landing')
var loginView = document.querySelector('.login')
var registerView = document.querySelector('.register')

landingView.classList.remove('off')

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



var loginForm = document.querySelector('form')
loginForm.addEventListener('submit', function(){
    
})