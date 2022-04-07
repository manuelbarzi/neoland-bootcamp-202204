var landingView = document.querySelector('.landing')
var registerView = document.querySelector('.register')
var loginView = document.querySelector('.login')

landingView.classList.remove('off')
var landingLoginButton = landingView.querySelector('.login-button')

landingLoginButton.addEventListener('click', function() {
    landingView.classList.add('off')
    loginView.classList.remove('off')
})

var landingRegisterButton = landingView.querySelector('.register-button')

landingRegisterButton.addEventListener('click', function() {
    landingView.classList.add('off')
    registerView.classList.remove('off')
})











