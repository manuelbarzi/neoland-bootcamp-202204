function Home() {
	Component.call(this, `<div class="Home">
		<h2>Hello, Home!</h2>
		<button>+</button>
	</div>`)
}

chainPrototypes(Component, Home)

Home.prototype.setName = function (name) {
	const title = this.container.querySelector('h2')

	title.innerText = `Hello, ${name}!`
}