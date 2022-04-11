var signUpButton = document.getElementById("sign-up-button");
var logInButton = document.getElementById("log-in-button");

var landingPage = document.getElementById("landing-page");
var pageSignUp = document.getElementById("page-sign-up");
var footerTerms = document.getElementById("footer-terms");
var pageLogin = document.getElementById("page-log-in");

var startSignUp = () => {
    landingPage.style.display = false;
    pageSignUp.style.display = true;
    footerTerms.style.display = true;
}

signUpButton.addEventListener('click', startSignUp)

