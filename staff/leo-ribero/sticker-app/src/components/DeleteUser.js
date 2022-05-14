class DeleteUser extends Component {
    constructor() {
        super(`<div class="DeleteUser">
        <form class="Container">
            <input class="" type="password" name="password" placeholder="password"></input>
            <button class="Button">Delete UXser</button>
        </form>
    </div>`)
    this.container.querySelector('form').addEventListener('submit', event => {
        debugger
        event.preventDefault()

        const password = event.target.password.value
        
        deleteUserFun(sessionStorage.username, password, error => {
            if (error) {
                alert(error.message)
                return
            }
            alert('User deleted')
        
        })
        delete sessionStorage.username
        location.reload()
    })
    }

    }
