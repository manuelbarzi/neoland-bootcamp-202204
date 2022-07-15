class DeleteUser extends Component {
    constructor() {
        super(`<div class="DeleteUser">
            <form>
                <h2>Delete User</h2>
                <input type="password" name="password" id="password" placeholder="password">
                <button type="submit" class="SubmitButton">Save</button>
            </form>
        </div>`)

        
    }
    
    onDeleteUserSubmit(callback) {
        const formDeleteUser = this.container.querySelector('form')
    
        formDeleteUser.addEventListener('submit', (event) => {
            event.preventDefault()
    
            deleteUserFun(sessionStorage.username, (error) => {
                if (error) 
                    alert(error.message)
            })

            delete sessionStorage.username
            callback()
        })
    }

}