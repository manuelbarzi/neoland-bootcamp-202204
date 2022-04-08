var landingView = document.querySelector('.landing')
var pageRegister = document.querySelector('.page-register')
var homePage = document.querySelector('.home')

var pageLogin = document.querySelector('.page-login')

var pageRegisterBtn = document.querySelector('.register-btn')
var loginBtnRegister = document.querySelector('.login-btn-register')
var registerBtnLogin = document.querySelector('.register-btn-login')
var landingLoginBtn = landingView.querySelector('.login-btn')

// landingView.classList.remove('off')

landingLoginBtn.addEventListener("click", toLogin)
pageRegisterBtn.addEventListener("click", toRegister)
loginBtnRegister.addEventListener('click', loginToRegister)
registerBtnLogin.addEventListener('click', registerToLogin)

pageLogin.addEventListener('submit', inputValue)

function toLogin(){
    landingView.classList.add('off')
    pageLogin.classList.remove('off')
}
function toRegister(){
    landingView.classList.add('off')
    pageRegister.classList.remove('off')
}

function loginToRegister(){
    pageLogin.classList.add('off')
    pageRegister.classList.remove('off')
}

function registerToLogin(){
    pageRegister.classList.add('off')
    pageLogin.classList.remove('off')
}

var errorLogin = document.querySelector('.page-login__error')

function inputValue(event) {
    event.preventDefault()

    var username = event.target.username.value
    var password = event.target.password.value

    if(username !== 'pepito' || password !== '123'){

        var parrafo = document.createElement('p')
        console.log(parrafo, 44)
        parrafo.textContent = 'credenciales incorrectas'
        errorLogin.appendChild(parrafo)
        return
    }
    pageLogin.classList.add('off')
    homePage.classList.remove('off')
}