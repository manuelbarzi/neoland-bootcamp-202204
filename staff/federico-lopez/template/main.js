var landingView = document.querySelector('.landing-view');
var signUpView = document.querySelector('.sign-up-view');
var logInView = document.querySelector('.log-in-view');

landingView.classList.remove('off');

var bottonSignUpLandingView = document.querySelector('.button-sign-up-landing-view');
var bottonLogInLandingView = document.querySelector('.botton-log-in-landing-view');


bottonSignUpLandingView.addEventListener('click', function() {
    landingView.classList.add('off');
    signUpView.classList.remove('off');})

var bottonRegistered = document.querySelector('.button-already-registered');

bottonRegistered.addEventListener('click', function() {
    signUpView.classList.add('off');
    logInView.classList.remove('off');
})

bottonLogInLandingView.addEventListener('click', function(){
    landingView.classList.add('off');
    logInView.classList.remove('off');
})

var bottonNotRegistered = document.querySelector('.button-not-registered');

bottonNotRegistered.addEventListener('click', function(){
    logInView.classList.add('off');
    signUpView.classList.remove('off');
})