function Home() {
	Component.call(this, `<div class="Home Container">
		<header class="Home__header">
			<h2>Hello, Home!</h2>
			<button class="Home__logout">Logout</button>
		</header>

		<main class="Home__body"></main>

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

	const stickerList = new StickerList

	this.addToBody(stickerList)

	addStickerButton.addEventListener('click', () => {
		const sticker = new Sticker

		sticker.onClose(() => {
			list.removeChild(sticker.container)
		})

		stickerList.addSticker(sticker)
	})

	if (sessionStorage.username)
		retrieveUser(sessionStorage.username, (error, user) => {
			if (error) {
				alert(error.message)

				return
			}

			this.setName(user.name)
		})
}

chainPrototypes(Component, Home)

Home.prototype.setName = function (name) {
	const title = this.container.querySelector('h2')

	title.innerText = `Hello, ${name}!`
}

Home.prototype.addToBody = function (component) {
	this.container.querySelector('.Home__body').appendChild(component.container)
}