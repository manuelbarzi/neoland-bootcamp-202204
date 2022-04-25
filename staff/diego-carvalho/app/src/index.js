const root = document.querySelector('#root')//root is the container HTML where all JS files are saved.
//child element of components
const helloWorld = new HelloWorld
//child elements of components
const register = new Register
const login = new Login
const home = new Home

//using the function (onSumit)previous created to save the values 
register.onSubmit(function (name, username, password){
    const user = {
        name: name, 
        username: username, 
        password: password 
    }

    user.push(user)//pushing the submit values to the const user.

    root.removeChild(register.container)//removeChild() method to, in a click, close the register page 
    root.appendChild(login.container)//appendChild() method to, in a click, close the resgister page and add login page.
})

login.onSumit(function(username, password){
    const matches = users.some(function(user){//some method to check the username and password previous resgistered is true or false.
        return user.username === username && user.password === password
    })

    if (matches) {
        const user = users.find(user => user.username === username)// the find method return the username  if its match.

        home.setName(user.name)

        root.removeChild(login.container)//removeChild() method to, in a click, close the login page 

        root.appendChild(home.container)//appendChild() method to, in a click, close the login page and add home page.
    } else alert('wrong credentials')//alert if something is wrong
})
//if something is wrong, clicking on the register anchor (<a>)...  
login.onRegisterClick(function(){
    root.removeChild(login.container)//...removeChild method will close the login page

    root.appendChild(register.container)//...and add a register page.
})

root.append(helloWorld.container, login.container)





