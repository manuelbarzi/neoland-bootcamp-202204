class ChangeName extends Component {
    constructor() {
        super(`<div class="ChangeName Profile--form">
            <form class="Container">
                <input class="Input Input--light" type="text" name="name" placeholder="name">
                <button class="Button">Save</button>
            </form>
        </div>`)
    
        this.container.querySelector('form').addEventListener('submit', event => {
            event.preventDefault()
    
            const newName = event.target.name.value
            
            updateUserName(sessionStorage.username, newName, error => {
                if (error) {
                    alert(error.message)
    
                    return 
                }
    
                alert('Name saved')
            })
    
        })
    }

}