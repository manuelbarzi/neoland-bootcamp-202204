

//------------------------------------->
//ARBOL DE COMPONENTES DESDE JAVA SCRIPT

const root = document.querySelector('#root') //porque es id

const div = document.createElement ('div')// quiero que el div tenga el css del documento css
div.classList.add('helloworld') //helloworld.classList.add('helloworld')


const h1 = document.createElement('h1') //const title = document.createElement('h1')
h1.innerText = 'Hello, World!' //poner un nuevo texto dentro del h1

div.append(h1) //un h1 dentro de un div ==helloworld.append(title)

const login = document.createElement('div')
login.classList.add('login')

const form=document.createElement('div')
login.classList.add('login__form')

const usernameInput=document.createElement('input')
usernameInput.type= 'text'
usernameInput.name ='username'
usernameInput.placeholder = 'username'

const passwordInput=document.createElement('input')
usernameInput.type= 'password'
usernameInput.name= 'password'
usernameInput.placeholder = 'password'

const submitButton = document.createElement('button')
submitButton.innerText = 'Login'


form.append(usernameInput, passwordInput, submitButton) //input de username i de password dentro de un form
login.append(form) //login dentro de un form

root.append(div) //un div dentro de root==root.append(helloworld)

//---------------------------> LIBRERIA DE COMPONENTES

function Component (elemType, className, htmlContent){    //1.div,parr 2.classes 3.form, input, button..
    this.container = document.createElement(elemType)  //this para elements
    this.container.classList.add(className)            //this para classes
    this.container.innerHTML = htmlContent             //this para htmlcontent
}


function chainPrototype (parent,child){
    child.prototype= Object.create(parent.prototype)
    child.prototype.constructor = child
}
//______________________________________________________________

function HelloWorld(){ //constructor de Component, porque esta en mayuscula
    Component.call(this, 'div', 'hello world', '<h1>Hello, World!</h1>')
}

chainPrototypes(Component, HelloWorld)
//=
/*function chainPrototype (Component,HelloWorld){
    HelloWorld.prototype= Object.create(Component.prototype)
    HelloWorld.prototype.constructor = HelloWorld
}*/


/*
function Login(){
    Component.call(this, 'div, 'login', <form class='login__form">
    <input type='text' name="username" placeholder='password'>
    <input type='password' name='password' placeholder='password'></input>
    <button>Login</button>
</form>)
}

chainPrototypes(Component, Login)

//=mismo que HelloWorld


*/