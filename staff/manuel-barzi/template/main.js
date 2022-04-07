var landingView = document.querySelector('.landing')
var loginView = document.querySelector('.login')
var registerView = document.querySelector('.register')

landingView.classList.remove('off')

var landingLoginButton = landingView.querySelector('.login-button')

landingLoginButton.addEventListener('click', function() {
    landingView.classList.add('off')

    loginView.classList.remove('off')
})

// TODO mechanise all other navigations