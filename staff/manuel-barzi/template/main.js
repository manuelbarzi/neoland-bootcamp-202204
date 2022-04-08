var landingView = document.querySelector('.landing')
var loginView = document.querySelector('.login')
var registerView = document.querySelector('.register')

landingView.classList.remove('off')

var landingLoginAnchor = landingView.querySelector('.login-anchor')

landingLoginAnchor.addEventListener('click', function() {
    landingView.classList.add('off')

    loginView.classList.remove('off')
})

// TODO mechanise all other navigations

var landingRegisterAnchor = landingView.querySelector('.register-anchor')

landingRegisterAnchor.onclick = function() {
    landingView.classList.add('off')

    registerView.classList.remove('off')
}

var loginRegisterAnchor = loginView.querySelector('.register-anchor')

loginRegisterAnchor.onclick = function() {
    loginView.classList.add('off')

    registerView.classList.remove('off')
}