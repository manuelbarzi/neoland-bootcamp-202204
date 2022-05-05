class Login extends Component {

    constructor() {
        super(`<div>
            <form class="form__login Container">
                <h1 class="form__login__title">Login To StickerApp</h1>

                <fieldset>
                    <label id="username" for="username">Username or Email</label>
                    <input class="form__login__input" id="username" type="text" name="username" placeholder="username">

                    <label id="password" for="password">Password</label>
                    <input class="form__login__input" id="password" type="password" name="password" placeholder="password">
                <fieldset>
                    
                <button class="form__login__btn">Login</button>
                <a href="#">Register</a>
            </form>
        </div>`)
    }

    onUserLoggedIn(callbalck) {
        const form = this.container.querySelector('form')
        form.addEventListener('submit', function(e) {
            e.preventDefault()
            
            const username = form.username.value
            const password = form.password.value
            
            // callbalck(username, password)
    
            authenticateUser(username, password, function(error) {
                if (error) {
                    alert(error.message)
                    return
                }
                sessionStorage.username = username
                callbalck()
            })
        })
    }
    
    onRegisterClick(callback) {
        const anchor = this.container.querySelector('a')
    
        anchor.addEventListener('click', function(event) {
            event.preventDefault()
    
            callback()
        })
    }
}