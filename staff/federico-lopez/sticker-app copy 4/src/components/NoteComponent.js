function NoteComponent(username, text) {
    Component.call(this, `<li class="NoteComponent">
    <div class="noteButtons">
        <a class="editButton">Edit</a>
        <a class="removeButton">Remove</a>
    </div>
    <p class="noteText"></p>
    </li>`)

    const p = this.container.querySelector('p')

    p.innerText = `${username}: ${text}`
}

chainPrototypes(Component, NoteComponent)

NoteComponent.prototype.onClickEdit = function(callback) {  
    const editButton = this.container.querySelector('.editButton')
    
    editButton.addEventListener('click', () => {
        const previousText = this.container.querySelector('p').innerText
        const textInArray = previousText.split('')
        const indexOf = textInArray.indexOf(':')
        previousTextWithoutName = textInArray.slice(indexOf + 2).join('')
        
        callback(this, previousTextWithoutName)
    })
}

NoteComponent.prototype.onClickRemove = function(callback) {
    const removeButton = this.container.querySelector('.removeButton')

    removeButton.addEventListener('click', () => {
        const previousText = this.container.querySelector('p').innerText
        const textInArray = previousText.split('')
        const indexOf = textInArray.indexOf(':')
        previousTextWithoutName = textInArray.slice(indexOf + 2).join('')    
        
        callback(previousTextWithoutName)
    })
}