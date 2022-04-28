function Home() {
	Component.call(this, `<div class="Home">
		<h2>Hello, Home!</h2>
		<button>+</button>
	</div>`)

	const add = this.container.querySelector('button')

	// addSticker.addEventListener('click', function(){
	add.addEventListener('click', () => {
		const sticker = new Sticker

		sticker.onClose(function(){
			this.remove(sticker)
		}
		// justo despues de esto hay que hacer el closer en Sticker.js


		this.add(sticker)

	// }.bind(this)) 
	})// no hace falta "bind" porque es un arrow function te hace autobinding. Ver video a las 12:36 37
}

chainPrototypes(Component, Home)
 
Home.prototype.setName = function (name) {
	const title = this.container.querySelector('h2')

	title.innerText = `Hello, ${name}!`
}