function Home() {
    Component.call(this, `<div class="Home Container">
        <header class="Home__header">
            <h2>Hello, Home!</h2>
            <button class="Home__logout">Logout</button>
        </header>
        <ul class="Home__list Container"></ul>
        <footer class="Home__footer Container">
            <button class="Home__addSticker">+</button>
        </footer>
    </div>`)

    const logoutButton = this.container.querySelector('.Home__logout')

    logoutButton.addEventListener('click', () => {
        delete sessionStorage.username

        app.remove(home)
        app.add(login)
    })

    const addStickerButton = this.container.querySelector('.Home__addSticker')

		// addSticker.addEventListener('click', function(){
		addStickerButton.addEventListener('click', () => {

		//Mon 2 May v
		const list = this.container.querySelector('.Home__list')


			const sticker = new Sticker
			// hemos instanciado un objeto, sticker es un componente
			
			sticker.onClose(() => {

				//Mon 2 May v
				//this.remove(sticker)
				list.removeChild(sticker.container)
			})
			// cuando te cierras, eliminamos el sticker de la home (this) con
			// el método remove. Luego tenemos que hacer el closer
		
			//Mon 2 May v
			//const list = this.container.querySelector('.Home__list')

			list.append(sticker.container)

	// }.bind(this))
	})// no hace falta "bind" porque es un arrow function te hace autobinding. Ver video a las 12:36 37


	// Thu 28 Apr 13:16
	if (sessionStorage.username) { //si existe username entonces cargame el usuario (solo cuando se crea la home)
		retrieveUser(sessionStorage.username, (error, user) => {
			if (error) {
				alert(error.message)

				return
			}

			this.setName(user.name)

			// login.removeFrom(app)
			// home.addTo(app)
		})

		retrieveNotes(sessionStorage.username, (error, notes) => {

			if(error) {
				alert(error.message)

				return
			}
			// Fri 29 Apr 1250. Ahora(siguiente linea), vamos a hacer que se rendericen aqui las notas cuando existan y exista el usuario

				const list = this.container.querySelector('.Home__list')

				const items = notes.map (note => {				
					const item = document.createElement('li')

					const sticker = new Sticker
			
			// Mon 2 May v
			// sticker.container.querySelector('textarea').innerText = note.text
					
				sticker.setText(note.text)

				sticker.setId(note.id)

				sticker.onClose(() => list.removeChild(item))
				//Mon 2 May ^

				item.appendChild(sticker.container)

				return item
				//los items (sticker) no son componenetes, son elementos HTML creados imperativamente con el DOM

			})
			
			list.append(...items)
			//spread operator VER DOCU. te separa los elementos de un array por comas

		})

	}// check Fri 29 Apr 1249

}

chainPrototypes(Component, Home)
 
Home.prototype.setName = function ( name) {
	const title = this.container.querySelector('h2')

	title.innerText = `Hello, ${name}!`
}