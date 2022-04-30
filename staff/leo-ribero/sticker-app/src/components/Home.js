function Home() {
	Component.call(this, `<div class="Home">
		<h2>Hello, Home!</h2>
		<button>+</button>
	</div>`)

	const addSticker = this.container.querySelector('button')

		// addSticker.a ddEventListener('click', function(){
		addSticker.addEventListener('click', () => {
			const sticker = new Sticker
			// hemos instanciado un objeto, sticker es un componente
			
			sticker.onClose(() => {
				this.remove(sticker)
			})
			// cuando te cierras, eliminamos el sticker de la home (this) con
			// el método remove. Luego tenemos que hacer el closer
		

		this.add(sticker)  

	// }.bind(this))
	})// no hace falta "bind" porque es un arrow function te hace autobinding. Ver video a las 12:36 37


	// Thu 28 Apr 13:16
	if (sessionStorage.username) //si existe username entonces cargame el usuario (solo cuando se crea la home)
		retrieveUser(sessionStorage.username, (error, user) => {
			if (error) {
				alert(error.message)

				return
			}

			this.setName(user.name)

			// login.removeFrom(app)
			// home.addTo(app)
		})

}

chainPrototypes(Component, Home)
 
Home.prototype.setName = function ( name) {
	const title = this.container.querySelector('h2')

	title.innerText = `Hello, ${name}!`
}