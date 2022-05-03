var landingView = document.querySelector('.landing')
var pageLogin = document.querySelector('.page-login')
var pageRegister = document.querySelector('.page-register')
var homePage = document.querySelector('.home')

landingView.querySelector('.landing-btn__login').addEventListener("click", toLogin)
landingView.querySelector('.landing-btn__register').addEventListener("click", toRegister)
pageLogin.querySelector('.container-login__btn').addEventListener('click', loginToRegister)
pageRegister.querySelector('.container-register__btn').addEventListener('click', registerToLogin)

pageLogin.addEventListener('submit', inputsValuesLogin)
pageRegister.addEventListener('submit', inputsValuesRegister)
landingView.classList.remove('off')

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

function inputsValuesLogin(event) {
    event.preventDefault()
    var username = event.target.username.value
    var password = event.target.password.value

    if(username !== 'pepito' || password !== '123'){
        paintMessageLogin()
        return
    }
    pageLogin.classList.add('off')
    homePage.classList.remove('off')
}

function inputsValuesRegister(event) {
    event.preventDefault()
    var username = event.target.username.value
    var password = event.target.password.value
    var confirmPassword = event.target.confirmPassword.value

    if(username !== 'pepito' || password !== '123' || confirmPassword !== password) {
        paintMessageRegister()
        return
    }
    pageRegister.classList.add('off')
    pageLogin.classList.remove('off')
}

function paintMessageRegister() {
    var ele = pageRegister.querySelector('.alert')
    ele.innerHTML = ''
    var parrafo = document.createElement('p')
    parrafo.textContent = 'credenciales incorrectas'
    ele.appendChild(parrafo)
}
function paintMessageLogin() {
    var ele = pageLogin.querySelector('.alert')
    ele.innerHTML = ''
    var parrafo = document.createElement('p')
    parrafo.textContent = 'credenciales incorrectas'
    ele.appendChild(parrafo)
}