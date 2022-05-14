// const root = document.querySelector('#root')
// const helloWorld = new HelloWorld
// const register = new Register
// const login = new Login
// const home = new Home

const root = document.querySelector('#root')
// const helloWorld = new HelloWorld // estamos instanciando un HelloWorld. Es decir, creando una variable helloWorld que será una instancia de la clase HelloWorld 
const register = new register
// const login = new login
// const home = new Home

/////////////////////////////////////////////////////////////
// register.onSubmit(function(name, username, password) {
//     const user = { 
//         name: name, 
//         username: username, 
//         password: password 
//     }

//     users.push(user)

//     root.removeChild(register.container)
//     root.appendChild(login.container)
// })

/*  En este caso de abajo, onSubmit es un método. 
    Aquí estamos pasando a la función "register" el método "onSubmit" y 
    el parámetro que le estamos pasando es directamente toda una función
    que a su vez tiene tres parámetros "name, username, password"
    que hace cositas como añadir valores al array y ocultar register
    y mostrar login

    1.
    register.onSubmit()

    2.
    register.onSubmit(function(){
        
        })

    3. 


*/
register.onSubmit(function(name, username, password){
    const user = { 
                name: name, 
                username: username, 
                password: password 
            }
        user.push(user) // añadimos un objeto con tres valores en el array
        root.removeChild(register.container) //esta claro, quitamos register. ¿porque container? pues porque en la linea 8 de smart-components.js le dijimos que "container", con "this.container"
        root.appendChild(login.container)

        
})


/////////////////////////////////////////////////////////////

// login.onSubmit(function(username, password) {
//     const matches = users.some(function(user) { 
//         return user.username === username && user.password === password
//     })

//     if (matches) {
//         const user = users.find(user => user.username === username)

//         home.setName(user.name)

//         root.removeChild(login.container)

//         root.appendChild(home.container)
//     } else alert('wrong credentials')
// })

// login.onRegisterClick(function() {
//     root.removeChild(login.container)

//     root.appendChild(register.container)
// })

// root.append(helloWorld.container, login.container)









///////////////////////////////////////////////


// const root = document.querySelector('#root')

// const helloWorld = new HelloWorld

// const register = new Register
// const login = new Login
// const home = new Home

// register.onSubmit(function(name, username, password) {
//     const user = { 
//         name: name, 
//         username: username, 
//         password: password 
//     }

//     users.push(user)

//     root.removeChild(register.container)
//     root.appendChild(login.container)
// })

// login.onSubmit(function(username, password) {
//     const matches = users.some(function(user) { 
//         return user.username === username && user.password === password
//     })

//     if (matches) {
//         const user = users.find(user => user.username === username)

//         home.setName(user.name)

//         root.removeChild(login.container)

//         root.appendChild(home.container)
//     } else alert('wrong credentials')
// })

// login.onRegisterClick(function() {
//     root.removeChild(login.container)

//     root.appendChild(register.container)
// })

// root.append(helloWorld.container, login.container)