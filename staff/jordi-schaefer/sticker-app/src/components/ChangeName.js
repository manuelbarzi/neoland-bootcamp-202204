function ChandeName() {
    Component.call(this, `<div class="ChangeName">
        <form class="Container">
            <input type="text" name="text" placeholder="New name">

            <button>Save</button>
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

            alert('Name changed')
        })

    })
}

chainPrototypes(Component, ChangeName)