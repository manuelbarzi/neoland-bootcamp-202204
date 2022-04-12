var vistalanding = document.querySelector('.page')
var loginBtn = document.querySelector('.login-btn')
var vistaLogin = document.querySelector('.vista-login')

var registerBtn = document.querySelector('.register-btn')
var vistaRegister = document.querySelector('.vista-register')

var loginToRegister = document.querySelector('.login-to-register')
var registerToLogin = document.querySelector('.register-to-login')

var usernameValue = document.querySelector('.username')
var passwordValue = document.querySelector('.password')
var homePage = document.querySelector('.home')

var nameValue = document.querySelector('.name')
var mailValue = document.querySelector('.mail')
var passwordRegisterValue = document.querySelector('.password-register')

vistalanding.classList.remove('off')

loginBtn.addEventListener('click', function(){ 
    vistalanding.classList.add('off')
    vistaLogin.classList.remove('off')
})

registerBtn.addEventListener('click', function(){
    vistalanding.classList.add('off')
    vistaRegister.classList.remove('off')

})

loginToRegister.addEventListener('click', function(){
    vistaLogin.classList.add('off')
    vistaRegister.classList.remove('off')
    
})

registerToLogin.addEventListener('click', function(){
    vistaRegister.classList.add('off')
    vistaLogin.classList.remove('off')

})


vistaLogin.addEventListener('submit', function(e){
    e.preventDefault()
    var username = usernameValue.value
    var password = passwordValue.value
    if (username !== "paula" || password !== "1234"){
        alert ('wrong username')
        return
    }
    vistaLogin.classList.add('off')
    homePage.classList.remove('off')
})


vistaRegister.addEventListener('submit', function(e){
    e.preventDefault()

    var username = nameValue.value
    var mail = mailValue.value
    var password = passwordRegisterValue.value
    if (username !== "paula" || mail !== "paula@gmail.com" || password !== "1234"){
        alert ('wrong username')
        return
    
    } 
    vistaRegister.classList.add('off')
    vistaLogin.classList.remove('off')

})






