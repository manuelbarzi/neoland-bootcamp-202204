function NoteComponent(username, text) {
    Component.call(this, `<li>
    <button>Edit</button>
    <p></p>
    </li>`)

    const p = this.container.querySelector('p')

    p.innerText = `${username}: ${text}`
}

chainPrototypes(Component, NoteComponent)

NoteComponent.prototype.onClickEdit = function(callback) {
    const editButton = this.container.querySelector('button')

    const previousText = this.container.querySelector('p').innerText

    editButton.addEventListener('click', () => {
        callback(previousText)
    })
}