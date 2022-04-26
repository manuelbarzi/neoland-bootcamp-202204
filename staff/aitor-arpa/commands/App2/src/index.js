const root = document.querySelector('#root')

const helloWorld = new HelloWorld

const register = new Register
const login = new Login
const home = new Home

register.onSubmit(function(name, username, password) {
    const user = { 
        name: name, 
        username: username, 
        password: password 
    }

    users.push(user)

    root.removeChild(register.container)
    root.appendChild(login.container)
})

login.onSubmit(function(username, password) {
    const matches = users.some(function(user) { 
        return user.username === username && user.password === password
    })

    if (matches) {
        const user = users.find(user => user.username === username)

        home.setName(user.name)

        root.removeChild(login.container)

        root.appendChild(home.container)
    } else alert('wrong credentials')
})

login.onRegisterClick(function() {
    root.removeChild(login.container)

    root.appendChild(register.container)
})

register.onLoginClick(function() {
    root.removeChild(register.container)

    root.appendChild(login.container)
})
root.append(helloWorld.container, login.container)