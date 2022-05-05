function ChangeName() {
    Component.call(this, `<div class="ChangeName">
        <form class="Container">
            <input type="text" name="name" placeholder="name">
            <input type="text" name="newName" placeholder="enter the new name">
            <button>Save</button>
        </form>
    </div>`)


    this.Container.querySelector('form').addEventListener('submit', event => {
        event.preventDefault()

        const name = event.target.name.value
        const newName = event.target.newName.value

        updateUserName(sessionStorage.username, name, newName, error => {
            if (error) {
                alert(error.message)

                return
            }

            alert('Name saved')
        })
    })
}








chainPrototypes(Component, ChangeName)

