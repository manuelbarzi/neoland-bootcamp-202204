var landingView = document.querySelector('.landing')
var loginView = document.querySelector('.login')
var registerView = document.querySelector('.register')
var homeView = document.querySelector('.home-page')


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

var registroButton = loginView.querySelector('.button-registro')

registroButton.addEventListener('click',function() {
    loginView.classList.add('off')

    registerView.classList.remove('off')
})

var loginForm = loginView.querySelector('form')

loginForm.addEventListener('submit', function (event) {
    
    event.preventDefault()

    var usernameInput = loginForm.querySelector('input[name=username]')
    var passwordInput = loginForm.querySelector('input[name=password]')

    var username = usernameInput.value
    var password = passwordInput.value
    
    if (username !== 'miguel' || password !== 'miguel123' ) {
        alert('datos erroneos')
        

        return
    }

    loginView.classList.add('off')

    homeView.classList.remove('off')

})

var registerForm = registerView.querySelector('.page')

registerForm.addEventListener('submit', function (event) {
    
    event.preventDefault()

    var usernameInput = registerForm.querySelector('input[name=username]')
    var emailInput = registerForm.querySelector('input[name=email]')
    var passwordInput = registerForm.querySelector('input[name=password]')
    var repeatInput = registerForm.querySelector('input[name=r-password]')

    var username = usernameInput.value
    var email = emailInput.value
    var password = passwordInput.value
    var rpassword = repeatInput.value
    
        if (username !== 'miguel' || email !== 'migueldiaz@gmail.com' || password !== 'miguel123' ||  rpassword !== 'miguel123' ) {
            console.log(event.target.username.value)
        return
    }

    registerView.classList.add('off')

    loginView.classList.remove('off')

})



