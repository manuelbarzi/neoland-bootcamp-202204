var landigView = document.querySelector(".landing")
var registerView = document.querySelector(".registro-page")
var loginView = document.querySelector(".login-inicio")
var homeView = document.querySelector ('.home')

//       Work Views 

//loginView.classList.remove('off')
//registerView.classList.remove ('off')
homeView.classList.remove ('off')


 //landigView.classList.remove('off')

// Click on Register-Btn go to Register

var registerButton = landigView.querySelector('.register-btn') 

registerButton.onclick = function() {

 landigView.classList.add('off')
 
 registerView.classList.remove('off')
}
// Click on Login-Btn go to Login

var loginButoon = landigView.querySelector ('.singin')

loginButoon.onclick = function() {

  landigView.classList.add ('off')
  loginView.classList.remove ('off') 
}
 
// Click on Login-btn in to RegisterView go to LoginView

var backLogin = registerView.querySelector ('.go-login')

    backLogin.onclick = function () {
        registerView.classList.add ('off')
        loginView.classList.remove ('off')
}

var go_reg = registerView.querySelector ('.go-reg')

  
  go_reg.onclick = function() {
    registerView.classList.add ('off')
    loginView.classList.remove ('off')
}


// Click on  AncorRegister  in to RegisterView  go to LoginView 

var backRegister = loginView.querySelector ('.backRegister')

    backRegister.onclick = function () {
        loginView.classList.add ('off')
        registerView.classList.remove ('off')

    }

/*  Click on Sumbit  in to LoginView  go to HomeView and validate the one User*/


var registerclick = loginView.querySelector ('form')

registerclick.addEventListener ('submit', function(event){
    event.preventDefault ()

    var usernameInput = registerclick.querySelector ('input[name=username]')
    var passwordInput = registerclick.querySelector ('input[name=password]')
  
    var username = usernameInput.value
    var password = passwordInput.value

    //console.log (usernameInput.value) 
    //console.log (passwordInput.value)

    if (username !== 'admin' || password !== 'admin') { 
      alert ('El usuario o Contraseña no Validas') 

      return 
    }

    loginView.classList.add ('off')
    homeView.classList.remove ('off')
})
