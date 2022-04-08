var landingView = document.querySelector('.landing')
var loginView = document.querySelector('.login')
var registerView = document.querySelector('.register')
var homeView = document.querySelector('.home')

//landingView.classList.remove('off')
homeView.classList.remove('off')

var landingLoginAnchor = landingView.querySelector('.login-anchor')

landingLoginAnchor.addEventListener('click', function () {
    landingView.classList.add('off')

    loginView.classList.remove('off')
})

var landingRegisterAnchor = landingView.querySelector('.register-anchor')

landingRegisterAnchor.onclick = function () {
    landingView.classList.add('off')

    registerView.classList.remove('off')
}

var loginRegisterAnchor = loginView.querySelector('.register-anchor')

loginRegisterAnchor.onclick = function () {
    loginView.classList.add('off')

    registerView.classList.remove('off')
}

// TODO make navigation from register to login

var loginForm = loginView.querySelector('form')

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var usernameInput = loginForm.querySelector('input[name=username]')
    var passwordInput = loginForm.querySelector('input[name=password]')

    var username = usernameInput.value
    var password = passwordInput.value

    if (username !== 'pepito' || password !== '123123123') {
        alert('wrong credentials')

        return
    }

    loginView.classList.add('off')

    homeView.classList.remove('off')
})