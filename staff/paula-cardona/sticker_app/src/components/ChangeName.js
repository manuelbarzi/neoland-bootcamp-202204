class ChangeName extends Component {
    constructor(){
            super(`<div class="ChangeName">
            <form class="Container">
                <input type="text" name="name" placeholder="name">
                <input type="text" name="newName" placeholder="enter the new name">
                <button>Save</button>
            </form>
        </div>`)
        

        this.container.querySelector('form').addEventListener('submit', event => {
            event.preventDefault()
    
            const newName = event.target.name.value
    
            updateUserName(sessionStorage.username, newName, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }
    
                alert('Name changed')
                home.setName(newName)
            })
    
        })
}   }

