var landingView = document.querySelector('.landing-page')
var loginView = document.querySelector('.login-page')
var registerView = document.querySelector('.register-page')
var homeView = document.querySelector('.home-page')

landingView.classList.remove('off')
var landingLoginButton = landingView.querySelector('.signin-button')

landingLoginButton.addEventListener('click', function() {
    landingView.classList.add('off')

    loginView.classList.remove('off')
})

var landingRegisterButton = landingView.querySelector('.signup-button')

landingRegisterButton.onclick = function() {
    landingView.classList.add('off')

    registerView.classList.remove('off')
}


//TODO make navigation from login to home

var loginForm = loginView.querySelector('form')
loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var emailInput = loginView.querySelector('input[name=email]')
    var passwordInput = loginView.querySelector('input[name=password]')

    var nameEmail = emailInput.value
    var namePassword = passwordInput.value

    if (nameEmail !== 'diego@gmail.com' || namePassword !== '1234') {
        alert('wrong credentials')

        return
    }

    loginView.classList.add('off')

    homeView.classList.remove('off') 

})


var registerForm = registerView.querySelector('form')

registerForm.addEventListener('submit', function (event) {

    event.preventDefault()

    var userInput = registerForm.querySelector('input[name=username]')
    var mailInput = registerForm.querySelector('input[name=email]')
    var passInput = registerView.querySelector('input[name=password]')
    var rpasswordInput = registerForm.querySelector('input[name=r-password]')

    var usuario = userInput.value
    var mail = mailInput.value
    var contraseña = passInput.value
    var rcontraseña = rpasswordInput.value

        if (usuario !== 'diego'|| mail !== 'diego@gmail.com' || contraseña !== '1234' || rcontraseña !== '1234')

        return

    registerView.classList.add('off')

    loginView.classList.remove('off')

})

//TODO make navegation from register to home






