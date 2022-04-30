function Home() {
    Component.call(this, `<div class="Home">
        <button class="logout">Log Out</button>
        <h2>Hello, Home!</h2>
        <button class="addNote">+</button>
        <button class="listNotes">List notes</button>
    </div>`)

    const add = this.container.querySelector('.addNote')
    const list = this.container.querySelector('.listNotes')

    //add.addEventListener('click', function() {
    add.addEventListener('click', () => {
        if(this.container.querySelector('.Sticker'))
            return

        const sticker = new Sticker

        sticker.onSubmit(() => {
            this.remove(sticker)
        })

        sticker.onClose(() => {
            this.remove(sticker)
        })

        this.add(sticker)
        //}.bind(this))
    })

    list.addEventListener('click', () => {
        if(this.container.querySelector('.List')) 
            return

        const list = new List()
        if(!list.container.querySelector('li'))
            return

        this.add(list)
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

Home.prototype.onClickLogout = function(callback) {
    const logoutButton = document.body.querySelector('.logout')

    logoutButton.addEventListener('click', () => {
        callback()        
    })
}

