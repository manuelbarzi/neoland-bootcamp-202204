class ChangeName extends Component {
    constructor() {
        super(`<div class="ChangeName">
            <form>
                <h2>Change Name</h2>
                <input type="text" name="newName" id="newName" placehonder="newName">
                <button type="submit" class="SubmitButton">Save</button>
            </form>
        </div>`)

        
    }
    
    onChangeNameSubmit(callback) {
        const formChangeName = this.container.querySelector('form')
    
        formChangeName.addEventListener('submit', (event) => {
            event.preventDefault()
    
            const newName = event.target.newName.value
    
            updateName(sessionStorage.username, newName, (error) => {
                if (error) 
                    alert(error.message)
            })

            callback()
        })
    }

}