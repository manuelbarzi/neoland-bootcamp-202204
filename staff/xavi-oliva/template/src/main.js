var landingView = document.querySelector('.landing')
var loginView = document.querySelector('.login')
var signupView = document.querySelector('.signup')
var homeView = document.querySelector('.home')


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

var loginSignupAnchor = loginView.querySelector('.signup-button')

loginSignupAnchor.addEventListener('click', function() {
    loginView.classList.add('off')

    signupView.classList.remove('off')
})

var signupLoginAnchor = signupView.querySelector('.login-button')

signupLoginAnchor.addEventListener('click', function() {
    signupView.classList.add('off')

    loginView.classList.remove('off')
})

var loginForm = loginView.querySelector('form')

loginForm.addEventListener('submit', function(event) {
    event.preventDefault()
    // debugger
    // event
    // event.target
    // event.target.username
    // event-target.username.value
    var usernameInput = loginForm.querySelector('input[name=username]')
    var passwordInput = loginForm.querySelector('input[name=password]')
    
    var username = usernameInput.value
    var password = passwordInput.value
    
    if(username !== 'Xavi' || password !== '123') {
        alert('Hey wrong credentials! \nTry again')

        return
    }

    loginView.classList.add('off')
    homeView.classList.remove('off')
})

var signupForm = signupView.querySelector('form')

signupForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var usernameInput   = signupForm.querySelector('input[name=username]')
    var emailInput      = signupForm.querySelector('input[name=email]')
    var passwordInput   = signupForm.querySelector('input[name=password]')

    signupView.classList.add('off')
    loginView.classList.remove('off')
})