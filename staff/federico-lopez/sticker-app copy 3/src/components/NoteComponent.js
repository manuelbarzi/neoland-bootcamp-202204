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
    
    editButton.addEventListener('click', () => {
        const previousText = this.container.querySelector('p').innerText
        const textInArray = previousText.split('')
        const indexOf = textInArray.indexOf(':')
        previousTextWithoutName = textInArray.slice(indexOf + 2).join('')
        
        callback(this, previousTextWithoutName)
    })
}