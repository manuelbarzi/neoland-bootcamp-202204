var landingView = document.querySelector('.landing')
var loginView = document.querySelector('.login')
var signupView = document.querySelector('.signup')

landingView.classList.remove('off')

var landingLoginButton = landingView.querySelector('.login-button')

landingLoginButton.addEventListener('click', function() {
    landingView.classList.add('off')

    loginView.classList.remove('off')
})

var landingSignupButton = landingView.querySelector('.signup-button')

landingSignupButton.addEventListener('click', function() {
    landingView.classList.add('off')

    signupView.classList.remove('off')
})

var backButtonA = loginView.querySelector('.back-button')

backButtonA.addEventListener('click', function() {
    loginView.classList.add('off')

    landingView.classList.remove('off')
})

var backButtonB = signupView.querySelector('.back-button')

backButtonB.addEventListener('click', function() {
    signupView.classList.add('off')

    landingView.classList.remove('off')
})
