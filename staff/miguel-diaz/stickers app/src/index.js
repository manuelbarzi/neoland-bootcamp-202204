const root = document.querySelector('#root')

const app = new App
const helloWorld = new HelloWorld
const register = new Register
const login = new Login
let home


if (!sessionStorage.username)
    app.add(login)
else {
    home = new Home 
    app.add(home)
}
// root.appendChild(app.container)

// register.onSubmit(function (name, username, password) {
//     registerUser(name, username, password, function (error) {
//         if (error) {
//             alert(error.message)

//             return
//         }

//         register.removeFrom(app)
//         login.addTo(app)
//     })
// })

// register.onLoginClick(function () {
//     register.removeFrom(app)
//     login.addTo(app)
// })

// login.onSubmit(function (username, password) {
//     authenticateUser(username, password, function (error) {
//         if (error) {
//             alert(error.message)

//             return
//         }

//         sessionStorage.username = username

//         retrieveUser(username, function (error, user) {
//             if (error) {
//                 alert(error.message)

//                 return
//             }

//             home = new Home

//             home.setName(user.name)

//             login.removeFrom(app)
//             home.addTo(app)
//         })
//     })

// })

// login.onRegisterClick(function() {
//     login.removeFrom(app)
//     register.addTo(app)
// })

root.appendChild(app.container)

register.onUserRegistered(() => {
    register.removeFrom(app)
    login.addTo(app)
})

register.onLoginClick(function () {
    register.removeFrom(app)
    login.addTo(app)
})

login.onUserLoggedIn(() => {
    home = new Home

    login.removeFrom(app)
    home.addTo(app)
})

login.onRegisterClick(function () {
    login.removeFrom(app)
    register.addTo(app)
})


// home.onSubmitSearch(function(textSearch) {
    
//     const listOfLinks = newspapers.map(newspaper => {
//         const text = textSearch.split(' ').join(newspaper.separator)
//         return newspaper.url + newspaper.add + text
//     })

//     const listHTMLElement = document.querySelector('ul')

//     listOfLinks.forEach(link => {
//         const elementLi = document.createElement('li')
//         const elementAnchor = document.createElement('a')
//         elementAnchor.innerText = link
//         elementAnchor.href = link
//         elementAnchor.target = "_blank"
//         listHTMLElement.appendChild(elementLi)
//         elementLi.appendChild(elementAnchor)
//     })
// })

// root.append(helloWorld.container, login.container)