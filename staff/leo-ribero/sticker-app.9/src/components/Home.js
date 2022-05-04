class Home extends Component(){
    constructor(){
        super(`<div class="Home Container">
        <header class="Home__header Container Container--row Container--spread-sides">
            <button class="Button Button--no-border Home__home">📋</button>
            <div>
                <button class="Button Button--no-border Home__profile">Profile</button>
                <button class="Button Button--no-border Home__logout">Logout</button>
            </div>
        </header>

        <main class="Home__body Container"></main>

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

            if (!profile)
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

    addStickerButton.addEventListener('click', () => {
        const sticker = new Sticker

        sticker.onClose(() => {
            stickerList.removeSticker(sticker)
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

    setName(name) {
        const profileButton = this.container.querySelector('.Home__profile')
        profileButton.innerText = name
    }

    addToBody(callback) {
        this.container.querySelector('.Home__body').appendChild(component.container)
    
    }
    removeFromBody(callback){
        this.container.querySelector('.Home__body').removeChild(component.container)
    
    }
    hasBody(callback){
        return this.container.querySelector('.Home__body').hasChild(component.container)
    
    }

    
}


///////////////////////////////

// function Home() {
//     Component.call(this, `<div class="Home Container">
//         <header class="Home__header Container Container--row Container--spread-sides">
//             <button class="Button Button--no-border Home__home">📋</button>
//             <div>
//                 <button class="Button Button--no-border Home__profile">Profile</button>
//                 <button class="Button Button--no-border Home__logout">Logout</button>
//             </div>
//         </header>

//         <main class="Home__body Container"></main>

//         <footer class="Home__footer Container">
//             <button class="Home__addSticker">+</button>
//         </footer>
//     </div>`)

//     const addStickerButton = this.container.querySelector('.Home__addSticker')
//     const stickerList = new StickerList
//     let profile

//     this.addToBody(stickerList)

//     const homeButton = this.container.querySelector('.Home__home')

//     homeButton.addEventListener('click', () => {
//         if (!this.hasBody(stickerList)) {
//             this.removeFromBody(profile)

//             this.container.querySelector('.Home__footer').appendChild(addStickerButton)

//             this.addToBody(stickerList)
//         }
//     })

//     const profileButton = this.container.querySelector('.Home__profile')

//     profileButton.addEventListener('click', () => {
//         if (!profile || !this.hasBody(profile)) {
//             this.removeFromBody(stickerList)

//             this.container.querySelector('.Home__footer').removeChild(addStickerButton)

//             if (!profile)
//                 profile = new Profile

//             this.addToBody(profile)
//         }
//     })

//     const logoutButton = this.container.querySelector('.Home__logout')

//     logoutButton.addEventListener('click', () => {
//         delete sessionStorage.username

//         app.remove(home)
//         app.add(login)
//     })

//     addStickerButton.addEventListener('click', () => {
//         const sticker = new Sticker

//         sticker.onClose(() => {
//             stickerList.removeSticker(sticker)
//         })

//         stickerList.addSticker(sticker)
//     })

//     if (sessionStorage.username)
//         retrieveUser(sessionStorage.username, (error, user) => {
//             if (error) {
//                 alert(error.message)

//                 return
//             }

//             this.setName(user.name)
//         })
// }

// chainPrototypes(Component, Home)



// Home.prototype.setName = function (name) {
//     const profileButton = this.container.querySelector('.Home__profile')

//     profileButton.innerText = name
// }



// Home.prototype.addToBody = function (component) {
//     this.container.querySelector('.Home__body').appendChild(component.container)
// }



// Home.prototype.removeFromBody = function (component) {
//     this.container.querySelector('.Home__body').removeChild(component.container)
// }


// Home.prototype.hasBody = function (component) {
//     return this.container.querySelector('.Home__body').hasChild(component.container)
// }