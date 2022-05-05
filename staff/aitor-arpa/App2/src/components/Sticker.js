class Sticker extends Component {
    constructor() {
        super(`<div class="Sticker">
        <button>x</button>
        <p class="Sticker__id"> </p>
        <form class="Sticker__form">
        <textarea name="text"></textarea>
        <button>Save</button>
        </form>
    </div>`)


        this.id = null

        const form = this.container.querySelector('form')

        form.addEventListener('submit', event => {
            event.preventDefault()

            const text = form.text.value

            if (!this.id)
                createNote(sessionStorage.username, text, (error, noteId) => {
                    if (error) {
                        alert(error.message)

                        return
                    }


                    this.setId(noteId)

                    alert('Sticker saved!')
                })
            else
                updateNote(sessionStorage.username, this.id, text, error => {
                    if (error) {
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





    onClose(callback) { // nombre por donde la llamamos 
        const close = this.container.querySelector('button') // selecionamos el boton 

        close.addEventListener('click', function () { // cuando escuche el click
            callback() // espera a ser llamada en cualquier sitio 
        })
    }


    setText(text) {

        this.container.querySelector('textarea').innerText = text

    }

    setId(id) {
        this.id = id

        this.container.querySelector('.Sticker__id').innerText = `ID #${id}`
    }
}
        