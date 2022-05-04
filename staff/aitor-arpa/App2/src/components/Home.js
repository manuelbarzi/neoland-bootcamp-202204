class Home extends Component {
    constructor() {
        super(`<div class="Home Container">
        <header class="Home__header">
        <button class="Home__home">📋</button>
        <button class="Home__profile">Profile</button>
        <button class="Home__logout">Logout</button>
         </header>
        <main class="Home__body"></main>
        <footer class="Home__footer Container">
        <button class="Home__addSticker">+</button>
        </footer>
        </div>`)

        const addStickerButton = this.container.querySelector('.Home__addSticker')
        const stickerList = new StickerList
        let profile

        this.addToBody(stickerList)

        const homeButton = this.container.querySelector('.Home__home')

        homeButton.addEventListener('click', () => {

            if (!this.hasBody(stickerList)) {
                this.removeFromBody(profile)

                this.container.querySelector('.Home__footer').appendChild(addStickerButton)

                this.addToBody(stickerList)
            }
        })

        const profileButton = this.container.querySelector('.Home__profile')

        profileButton.addEventListener('click', () => {
            if (!profile || !this.hasBody(profile)) {
                this.removeFromBody(stickerList)

                this.container.querySelector('.Home__footer').removeChild(addStickerButton)

                profile = new Profile

                this.addToBody(profile)
            }
        })

        const logoutButton = this.container.querySelector('.Home__logout')

        logoutButton.addEventListener('click', () => {
            delete sessionStorage.username

            app.remove(home)
            app.add(login)
        })


        //add.addEventListener('click', function() {
        addStickerButton.addEventListener('click', () => {

            const sticker = new Sticker

            sticker.onClose(() => {
                stickerList.removeSticker(sticker)
            })

            stickerList.addSticker(sticker)
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


        chainPrototypes(Component, Home)
    }

    

setName(name) {
    const profileButton = this.container.querySelector('.Home__profile')

    profileButton.innerText = name
}

addToBody(component) {
    this.container.querySelector('.Home__body').appendChild(component.container)
}

removeFromBody(component) {
    this.container.querySelector('.Home__body').removeChild(component.container)
}

hasBody(component) {
    return this.container.querySelector('.Home__body').hasChild(component.container)
}}