const root = document.querySelector('#root')

const helloworld = createComponent('div', 'helloworld', '<h1>Hello, World!</h1>')

//const login = createComponent('div', 'login', '<form class="login__form"><input type="text" name="username" placeholder="username"><input type="password" name="password" placeholder="password"><button>Login</button></form>')
const login = createComponent('div', 'login', `<form class="login__form">
	<input type="text" name="username" placeholder="username">
	<input type="password" name="password" placeholder="password">
	<button>Login</button>
</form>`)

root.append(helloworld, login)

function createComponent(elemType, className, htmlContent) {
	const container = document.createElement(elemType)
	container.classList.add(className)

	container.innerHTML = htmlContent

	return container
}