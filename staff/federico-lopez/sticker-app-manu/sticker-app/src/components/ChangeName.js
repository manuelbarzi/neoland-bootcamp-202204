function ChangeName() {
    Component.call(this, `<div class="ChangeName">
        <form class="Container">
            <input type="text" name="name" placeholder="name">
            <button>Save</button>
        </form>
    </div>`)

    const form = this.container.querySelector('form')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const newUsername = event.target.name.value

        
    })
}

chainPrototypes(Component, ChangeName)