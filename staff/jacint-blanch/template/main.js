
// // HOME LOGIN

// var homeView = document.querySelector('.content');

// var homeLoginButton = homeView.querySelector('.content__btn__login');

// homeLoginButton.addEventListener('click', function(e) {
//     e.preventDefault()
// })

// // HOME REGISTER

// var homeView = document.querySelector('.content');

// var homeLoginButton = homeView.querySelector('.content__btn__register');

// homeLoginButton.addEventListener('click', function(e) {
//     loginView.classList.add('off');
//     e.preventDefault()
// })



// // LOGIN

// var loginView = document.querySelector('.auth_login');

// var loginButton = loginView.querySelector('.auth__form__btn');


// loginButton.addEventListener('click', function(e) {
//     e.preventDefault();
// })




// // REGISTER

// var registerView = document.querySelector('.auth_register');

// var registerButton = registerView.querySelector('.auth__form__btn');

// registerButton.addEventListener('click', function(e){
//     // console.log('hola');
//     e.preventDefault();
// })


var homePage = document.querySelector(".home")
var loginPage = document.querySelector(".auth_login")
var homePageLogin = document.querySelector(".content__btn__login")
var homePageRegister = document.querySelector(".content__btn__register")
var registerPage = document.querySelector(".auth_register")
var loginToRegister = document.querySelector(".auth__form__link")
var registerToLogin = document.querySelector(".auth__form__link_register")

homePage.classList.remove("off");


homePageLogin.addEventListener('click', function(e) {
    e.preventDefault()
    homePage.classList.add("off");
    loginPage.classList.remove("off");
})

homePageRegister.addEventListener('click', function(e) {
    e.preventDefault()
    homePage.classList.add("off");
    registerPage.classList.remove("off");
})

loginPage.addEventListener('click', function(e) {
    e.preventDefault()
})

registerPage.addEventListener('click', function(e){
    e.preventDefault()
})

loginToRegister.addEventListener('click',function(e) {
    e.preventDefault()
    loginPage.classList.add("off");
    registerPage.classList.remove("off")

})

registerToLogin.addEventListener('click',function(e) {
    e.preventDefault()
    registerPage.classList.add("off");
    loginPage.classList.remove("off")
})

















