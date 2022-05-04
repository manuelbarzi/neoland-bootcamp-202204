class Sticker extends Component {
    constructor(){
        super (`<div class="Sticker">
            <button>x</button>
            <p class="Sticker__id"></p>
            <form class="Sticker__form">   
                <textarea name="text"></textarea>
                <button>Save</button>
            </form>
        </div>`)          //sticker__form : bloque y elemento del bloquee

    
    
        //const form = this.container.querySelector('form') //busco dentro del this que en este caso es sticker, el elemento for.
        this.id = null
        
        const form = this.container.querySelector('form')
        
        form.addEventListener('submit', event => {  //cuando el form escuche el boton de submit que pare
            event.preventDefault()

            const text = form.text.value     //valor de la clase text del form guardala en text

            if (!this.id) //si el sticker no tiene id que cree una nota guardando el username en almacen, con el texto de la nota, con el id i si da error o no
                createNote(sessionStorage.username, text, (error, noteId) =>{
                    if (error){
                        alert(error.message)

                        return
                    }

                    this.id = noteId //guarde el id de esa nota

                    alert('Sticker saved!')
                })
            else
                updateNote(sessionStorage.username, this.id, text, error => { //si quiere actualizar nota con el id, el text, el username almacenado i si da error o no
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

    onClose(callback) {
        const close = this.container.querySelector('button') //guardamos el valor de button en close que será x

        close.addEventListener('click', function(){ //x cuando escuches click ejecuta la función que la función es la callback del home
            callback()
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