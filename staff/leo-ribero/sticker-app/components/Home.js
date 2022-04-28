function Home() {
	Component.call(this, `<div class="Home">
		<h2>Hello, Home!</h2>
		<button>+</button>
	</div>`)

	const addSticker = this.container.querySelector('button')

		// addSticker.addEventListener('click', function(){
		addSticker.addEventListener('click', () => {
		const sticker = new Sticker
		// hemos instanciado un objeto, sticker es un componente
 
		

		this.add(sticker)  

	// }.bind(this))
	})// no hace falta "bind" porque es un arrow function te hace autobinding. Ver video a las 12:36 37
}

chainPrototypes(Component, Home)
 
Home.prototype.setName = function (name) {
	const title = this.container.querySelector('h2')

	title.innerText = `Hello, ${name}!`
}