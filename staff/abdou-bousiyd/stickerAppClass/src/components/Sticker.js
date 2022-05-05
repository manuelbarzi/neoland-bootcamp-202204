class Sticker extends Component {

    constructor() {
        super(`<div class="Sticker">
            <div class"aa"></div>
            <button class="sticker__close"><i class="fa-solid fa-circle-xmark"></i></button>
            
            <form class="Sticker__form">
                <textarea class="Sticker__text" name="text" placeholder="type here..."></textarea>
                <p class="Sticker__id"></p>
                <button class="Button">Save</button>
            </form>
        </div>`)


    this.id = null
    
    const divaa = this.container.querySelector('.aa')
    const form = this.container.querySelector('form')

    form.addEventListener('submit', event => {
        event.preventDefault()

        const text = form.text.value

        if(!this.id)
            createNote(sessionStorage.username, text, (error, noteId) => { 
                if (error) {
                    alert(error.message)

                    return
                }
                this.id = noteId
                
                alert('Sticker saved!')

            })
        else 
            updateNote(sessionStorage.username, this.id, text, error => {
                if (error) {
                    const divaa = element.innerHTML = `<div id="open-modal" class="modal-window">
                    <div>
                       <a href="#" title="Close" class="modal-close">Close</a>
                       <h1>Voilà!</h1>
                    </div>`
                    alert(error.message)
                    return
                }
                alert('Sticker updated!')
            })
           
    })

    const close = this.container.querySelector('button')

    close.addEventListener('click', () => {
        if (this.id) {
            deleteNote(sessionStorage.username, this.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }
            })
        }
    })
}



onClose(callback) {
    const close = this.container.querySelector('button')
    
    close.addEventListener('click', function() {
        callback()
    })
}

setText(text) {
    this.container.querySelector('textarea').innerText = text
}

setId(id) {
    this.id = id
}
}