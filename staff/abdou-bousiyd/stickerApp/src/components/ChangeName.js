function ChangeName() {
    Component.call(this, `<div class="ChangeName">
        <form class="Container">
            <input type="text" name="name" placeholder="name">
            <button>Save</button>
        </form>
    </div>`)

    this.container.querySelector('form').addEventListener('submit', event => {
        event.preventDefault()

        const name = event.target.name.value
        
        updateUserName(sessionStorage.username, name, error => {
            if (error) {
                alert(error.message)

                return
            }

            alert('Name saved')
        })

    })

}

chainPrototypes(Component, ChangeName)