class ChangeName extends Component {
    constructor() {
        super(`<div class="ChangeName">
        <form class="Container">
            <input type="text" name="name" placeholder="name">
            <button>Save</button>
        </form>
    </div>`)


this.container.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()

    const newUsername = event.target.name.value

    updateUserName(sessionStorage.username, newUsername, error => {
        if (error) {
            alert(error.message)

            return
        }

        alert('Username changed')
    })

})
}

}