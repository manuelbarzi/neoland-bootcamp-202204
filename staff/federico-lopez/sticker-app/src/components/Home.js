function Home() {
    Component.call(this, `<div class="Home">
        <button class="logout">Log Out</button>
        <h2>Hello, Home!</h2>
        <button class="addNote">+</button>
    </div>`)
    
    if (sessionStorage.username)
    retrieveUser(sessionStorage.username, (error, user) => {
        if (error) {
            alert(error.message)
            
            return
        }
        
        this.setName(user.name)
    })

    if (!this.container.querySelector('.List')) {
        let list = new List(sessionStorage.username, this)

        if (!list.container.querySelector('li'))
            return

        this.add(list)
    }
}

chainPrototypes(Component, Home)

Home.prototype.setName = function (name) {
    const title = this.container.querySelector('h2')

    title.innerText = `Hello, ${name}!`
}

Home.prototype.onClickLogout = function (callback) {
    const logoutButton = this.container.querySelector('.logout')

    logoutButton.addEventListener('click', () => {
        delete sessionStorage.username
        callback()
    })
}

Home.prototype.onClickAdd = function (callback) {
    const add = this.container.querySelector('.addNote')

    add.addEventListener('click', () => {
        // if (this.container.querySelector('.Sticker'))
        //     return
        callback()
    })
}