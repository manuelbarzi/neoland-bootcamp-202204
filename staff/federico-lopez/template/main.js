var landingView = document.querySelector('.landing-view')
var signUpView = document.querySelector('.sign-up-view')
var logInView = document.querySelector('.log-in-view')
var homeView = document.querySelector('.home')

landingView.classList.remove('off')
// homeView.classList.remove('off')

var bottonSignUpLandingView = document.querySelector('.button-sign-up-landing-view')
var bottonLogInLandingView = document.querySelector('.botton-log-in-landing-view')


bottonSignUpLandingView.addEventListener('click', function() {
    landingView.classList.add('off')
    signUpView.classList.remove('off')})

var bottonRegistered = document.querySelector('.button-already-registered')

bottonRegistered.addEventListener('click', function() {
    signUpView.classList.add('off')
    logInView.classList.remove('off')
})

bottonLogInLandingView.addEventListener('click', function(){
    landingView.classList.add('off')
    logInView.classList.remove('off')
})

var bottonNotRegistered = document.querySelector('.button-not-registered')

bottonNotRegistered.addEventListener('click', function(){
    logInView.classList.add('off')
    signUpView.classList.remove('off')
})

var formLogInView = logInView.querySelector('form')

formLogInView.addEventListener('submit', function(event){
    event.preventDefault()
    var emailUser = event.target.email.value
    var passwordUser = event.target.password.value
    logInView.classList.add('off')
    homeView.classList.remove('off')
})

var formSignUpView = signUpView.querySelector('form')

formSignUpView.addEventListener('submit', function(event) {
    event.preventDefault()
    signUpView.classList.add('off')
    logInView.classList.remove('off')
})