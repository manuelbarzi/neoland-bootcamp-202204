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

    //add.addEventListener('click', function() {
    addStickerButton.addEventListener('click', () => {
        const list = this.container.querySelector('.Home__list')

        const sticker = new Sticker

        sticker.onClose(() => {
            list.removeChild(sticker.container)
        })
        
        list.appendChild(sticker.container)
    })

    if (sessionStorage.username) {
        retrieveUser(sessionStorage.username, (error, user) => {
            if (error) {
                alert(error.message)

                return
            }

            this.setName(user.name)
        })

        retrieveNotes(sessionStorage.username, (error, notes) => {
            if (error) {
                alert(error.message)

                return
            }

            const list = this.container.querySelector('.Home__list')

            const items = notes.map(note => {
                const item = document.createElement('li')

                const sticker = new Sticker
                sticker.setText(note.text)
                sticker.setId(note.id)

                sticker.onClose(() => list.removeChild(item))
                
                item.appendChild(sticker.container)

                return item
            })

            list.append(...items) // RTFM spread operator
        })
    }
}

chainPrototypes(Component, Home)

Home.prototype.setName = function (name) {
    const title = this.container.querySelector('h2')

    title.innerText = `Hello, ${name}!`
}