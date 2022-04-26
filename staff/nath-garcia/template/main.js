var landingPage = document.querySelector('.page');
var loginPage = document.querySelector('.login');
var registerPage= document.querySelector('.register');
var homePage = document.querySelector('.home');

//landingPage.classList.remove('off')
homePage.classList.remove('off')

var landingButton = landingPage.querySelector('.button_login');
landingButton.addEventListener('click', function(){
    landingPage.classList.add('off');
    loginPage.classList.remove('off');
})

var registerButton = landingPage.querySelector('.button_register');
registerButton.addEventListener('click', function(){
    landingPage.classList.add('off');
    registerPage.classList.remove('off');
})

var loginButton = registerPage.querySelector('.button_iniciar');
loginButton.addEventListener('click', function(){
    registerPage.classList.add('off');
    loginPage.classList.remove('off');
})

var inButton = loginPage.querySelector('.form')
inButton.addEventListener('submit', function(event){
    event.preventDefault()
    loginPage.classList.add('off')
    homePage.classList.remove('off')
})
//TODO if de input
var registermeButton = registerPage.querySelector('.form')
registermeButton.addEventListener('submit', function(event){
    event.preventDefault()
    registerPage.classList.add('off')
    loginPage.classList.remove('off')
})
var registrateArcho = loginPage.querySelector('.registrate');
registrateArcho.addEventListener('click', function(){
    loginPage.classList.add('off')
    registerPage.classList.remove('off')

})






