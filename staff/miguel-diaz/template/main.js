var landingView = document.querySelector('.landing')
var loginView = document.querySelector('.login')
var registerView = document.querySelector('.register')


landingView.classList.remove('off')

var landingLoginButton = landingView.querySelector('.button-log')

landingLoginButton.addEventListener('click', function() {
    landingView.classList.add('off')

    loginView.classList.remove('off')
})

var backButton = loginView.querySelector('.back-button')

backButton.addEventListener('click',function() {
    loginView.classList.add('off')

    landingView.classList.remove('off')
})

var landingRegButton = landingView.querySelector('.button-reg')

landingRegButton.addEventListener('click', function() {
    landingView.classList.add('off')

    registerView.classList.remove('off')
})

var backReg = registerView.querySelector('.back-reg')

backReg.addEventListener('click',function() {
    registerView.classList.add('off')

    landingView.classList.remove('off')
})


// TODO mechanise all other navigations

