function Home() {
    Component.call(this, `<div class="Home">
        <h2>Hello, Home!</h2>
        <button>+</button>
    </div>`)

    const buttonAdd = this.container.querySelector('button')

    //add.addEventListener('click', function() {
    buttonAdd.addEventListener('click', () => {
        const sticker = new Sticker

        sticker.onClose(() => {
            this.remove(sticker)
        })

        this.add(sticker)
        //}.bind(this))
    })

    if (sessionStorage.username) {
        retrieveUser(sessionStorage.username, (error, user) => {
            if (error) {
                alert(error.message)

                return
            }

            this.setName(user.name)
        })
    }
}

chainPrototypes(Component, Home)

Home.prototype.setName = function (name) {
    const title = this.container.querySelector('h2')

    title.innerText = `Hello, ${name}!`
}