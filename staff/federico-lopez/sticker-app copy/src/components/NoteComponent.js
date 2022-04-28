function NoteComponent(username, text) {
    Component.call(this, `<div><p></p></div>`)

    const p = this.container.querySelector('p')
    p.innerText = `${username} said: ${text}`
}