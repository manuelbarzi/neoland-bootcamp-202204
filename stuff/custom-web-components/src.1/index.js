const root = document.querySelector('#root')

const helloworld = new HelloWorld
const helloworld2 = new HelloWorld

const login = new Login
const login2 = new Login

root.append(helloworld.container, login.container, helloworld2.container, login2.container)

// Compos lib

function Component(template) {
    const temp = document.createElement('div')

    temp.innerHTML = template

    this.container = temp.firstChild
}

function chainPrototypes(parent, child) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}

// My custom components

function HelloWorld() {
    Component.call(this, `<div class="helloworld">
        <h1>Hello, World!</h1>
    </div>`)
}

chainPrototypes(Component, HelloWorld)

function Login() {
    Component.call(this, `<div class="login">
        <form class="login__form">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password">
            <button>Login</button>
        </form>
    </div>`)
}

chainPrototypes(Component, Login)