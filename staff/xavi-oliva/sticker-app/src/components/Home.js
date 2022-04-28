function Home() {
    Component.call(this, `<div class="Home">
        <h2>Hello, Home!</h2>
        <button>+</button>
    </div>`)

    const add = this.container.querySelector('button')
    
    /** la FUNCIÓN DE FLECHA tiene auto-binding
     * en función normal  }.bind(this)) */     
    add.addEventListener('click', () => {
        const sticker = new Sticker

        sticker.onClose(() => {
            this.remove(sticker)
        })

        this.add(sticker)
    })

    if (sessionStorage.username)
        retrieveUser(sessionStorage.username, (error, user) => {
            if(error) {
                alert(error.message)

                return
            }

            this.setName(user.name)
        })
}

chainPrototypes(Component, Home)

Home.prototype.setName = function (name) {
    const title = this.container.querySelector('h2')

    //title.innerText = 'Hello, ' + name + '!'
    title.innerText = `Hello, ${name}!`
}