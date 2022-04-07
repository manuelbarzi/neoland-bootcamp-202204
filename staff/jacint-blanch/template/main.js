var loginView = document.querySelector('.auth');

const loginButton = loginView.querySelector('.auth__form__btn');

loginButton.addEventListener('click', function(e) {
    console.log('hola');
    e.preventDefault()
})

