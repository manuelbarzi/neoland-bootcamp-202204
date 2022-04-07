var landingView = document.querySelector('.landing')
var pageRegister = document.querySelector('.page-register')

var pageLogin = document.querySelector('.page-login')
var pageRegisterBtn = document.querySelector('.register-btn')
var loginBtnRegister = document.querySelector('.login-btn-register')
var registerBtnLogin = document.querySelector('.register-btn-login')
var landingLoginBtn = landingView.querySelector('.login-btn')
landingView.classList.remove('off')

landingLoginBtn.addEventListener("click", toLogin)
pageRegisterBtn.addEventListener("click", toRegister)
loginBtnRegister.addEventListener('click', loginToRegister)
registerBtnLogin.addEventListener('click', registerToLogin)

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