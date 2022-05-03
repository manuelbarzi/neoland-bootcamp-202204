var homePage = document.querySelector(".home")
var loginPage = document.querySelector(".auth_login")
var registerPage = document.querySelector(".auth_register")
var homePageUser = document.querySelector('.user')

//Refactorizacion

// var homePageLogin = document.querySelector(".content__btn__login")
// var homePageRegister = document.querySelector(".content__btn__register")
// var loginToRegister = document.querySelector(".auth__form__link")
// var registerToLogin = document.querySelector(".auth__form__link_register")


homePage.classList.remove("off");


homePage.querySelector('.content__btn__login').addEventListener('click', function(e) {
    e.preventDefault()
    homePage.classList.add("off");
    loginPage.classList.remove("off");
})

homePage.querySelector('.content__btn__register').addEventListener('click', function(e) {
    e.preventDefault()
    homePage.classList.add("off");
    registerPage.classList.remove("off");
})

loginPage.querySelector('.auth__form__link').addEventListener('click',function(e) {
    e.preventDefault()
    loginPage.classList.add("off");
    registerPage.classList.remove("off")
})

registerPage.querySelector('.auth__form__link_register').addEventListener('click',function(e) {
    e.preventDefault()
    registerPage.classList.add("off");
    loginPage.classList.remove("off")
})


//Login Verification and Login to homepage 

var loginForm = loginPage.querySelector('.auth__form')

loginForm.addEventListener('submit', function(e) {
    e.preventDefault()

    var emailInput = loginForm.querySelector('input[name=email]')
    var passwordInput = loginForm.querySelector('input[name=password')
    
    var email = emailInput.value
    var password = passwordInput.value


    if (email !== 'jacksonblanch@hotmail.com' || password !== 'melon'){
        alert ('wrong credentials')
        return 
    }
    
    console.log(emailInput.value)
    console.log(passwordInput.value)

    loginPage.classList.add("off")
    homePageUser.classList.remove("off")
})

// Register Verification and Register to homepage

var registerForm = registerPage.querySelector('.auth__form__register')

registerForm.addEventListener('submit', function(e) {
    e.preventDefault()

    var usernameRegisterInput = registerForm.querySelector('input[name=username__register]')
    var emailRegisterInput = registerForm.querySelector('input[name=email')
    var passwordRegisterInput = registerForm.querySelector('input[name=password')
    var passwordConfirmRegisterInput = registerForm.querySelector('input[name=password__confirm')
    
    

    var usernameRegister = usernameRegisterInput.value
    var emailRegister = emailRegisterInput.value
    var passwordRegister = passwordRegisterInput.value
    var passwordConfirmRegister = passwordConfirmRegisterInput.value

    

    if (usernameRegister !== 'jackson' || emailRegister !== 'jacksonblanch@hotmail.com' || passwordRegister !== 'melon' || passwordConfirmRegister !== 'melon'){
        alert ('wrong credentials')
        return 
    }
    

    registerPage.classList.add("off")
    loginPage.classList.remove("off")
})





















