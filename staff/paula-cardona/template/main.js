var vistalanding = document.querySelector('.page')
var loginBtn = document.querySelector('.login-btn')
var vistaLogin = document.querySelector('.vista-login')

var registerBtn = document.querySelector('.register-btn')
var vistaRegister = document.querySelector('.vista-register')

var loginToRegister = document.querySelector('.login-to-register')
var registerToLogin = document.querySelector('.register-to-login')



console.log(registerToLogin)

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


