class Home extends Component {
    constructor() {
        super(`<div class="Home">
        <header class="header">
            <a class="viewStickersButton">Stickers</a>
            <a class="profileButton"></a>
            <button class="logout">Log Out</button>
        </header>
        <footer class="footer">
            <button class="addNote">+</button>
        </footer>
    </div>`)

        if (sessionStorage.username)
            retrieveUser(sessionStorage.username, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                this.setName(user.name)
            })

        const list = new List(sessionStorage.username, this)
        this.add(list)

        const add = this.container.querySelector('.addNote')

        let profile

        const profileButton = this.container.querySelector('.profileButton')

        profileButton.addEventListener('click', () => {    
            if(!profile || !this.has(profile)){
                profile = new Profile
                
                this.add(profile)
                if(this.has(list)) {
                    this.remove(list)
                    this.container.querySelector('.footer').removeChild(add)
            }
        }
        })

        const listButton = this.container.querySelector('.viewStickersButton')

        listButton.addEventListener('click', () => {
            if(!this.has(list)) {
                if(this.has(profile))
                    this.remove(profile)
                
                this.add(list)
                this.container.querySelector('footer').appendChild(add)
            }
        })
    }

    setName(name) {
        const profileButton = this.container.querySelector('.profileButton')

        profileButton.innerText = name
    }

    onClickLogout(callback) {
        const logoutButton = this.container.querySelector('.logout')

        logoutButton.addEventListener('click', () => {
            delete sessionStorage.username
            callback()
        })
    }

    onClickAdd(callback) {
        const add = this.container.querySelector('.addNote')

        add.addEventListener('click', () => {
            callback()
        })
    }
}