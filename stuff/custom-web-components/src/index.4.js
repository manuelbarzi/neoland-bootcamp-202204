const root = document.querySelector('#root')

const helloworld = new Component('div', 'helloworld', '<h1>Hello, World!</h1>')

const login = new Component('div', 'login', `<form class="login__form">
	<input type="text" name="username" placeholder="username">
	<input type="password" name="password" placeholder="password">
	<button>Login</button>
</form>`)

root.append(helloworld.container, login.container)

function Component(elemType, className, htmlContent) {
	this.container = document.createElement(elemType)
	this.container.classList.add(className)

	this.container.innerHTML = htmlContent
}