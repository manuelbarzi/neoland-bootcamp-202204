class ChangeName extends Component {
    constructor() {
        super (`<div class="ChangeName">
        <form class="Container">
            <input class="form" type="text" name="name" placeholder=" New name">

            <button class="Button">Save</button>
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
    }
}