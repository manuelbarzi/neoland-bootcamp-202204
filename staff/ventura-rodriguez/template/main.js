var page = document.querySelector('.page')

var loginForm = page.querySelector('.form')

loginForm.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log(event.target.username)
    console.log(event.target.password)
    debugger
    console.log('in')
})