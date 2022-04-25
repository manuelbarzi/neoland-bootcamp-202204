const root = document.querySelector('#root')

const helloworld = new HelloWorld
const helloworld2 = new HelloWorld

const login = new Login
const login2 = new Login

root.append(helloworld.container, login.container, helloworld2.container, login2.container)

// My compos lib

function Component(elemType, className, htmlContent) {
	this.container = document.createElement(elemType)
	this.container.classList.add(className)

	this.container.innerHTML = htmlContent
}

function HelloWorld() {
	Component.call(this, 'div', 'helloworld', '<h1>Hello, World!</h1>')
}

HelloWorld.prototype = Object.create(Component.prototype)
HelloWorld.prototype.constructor = HelloWorld

function Login() {
	Component.call(this, 'div', 'login', `<form class="login__form">
	<input type="text" name="username" placeholder="username">
	<input type="password" name="password" placeholder="password">
	<button>Login</button>
</form>`)
}

Login.prototype = Object.create(Component.prototype)
Login.prototype.constructor = Login