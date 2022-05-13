const { Component } = React
class Sticker extends Component {
   handleRemoveClick = () => {
       const { props: {stickerId, onRemove} } = this
       if (stickerId)
       deleteNote(sessionStorage.token, stickerId, error => {
           if(error) {
               alert(error.message)

               return
           }
           onRemove(stickerId)
       })
   }
   
   handleSaveSubmit = event => {
    event.preventDefault()

    const {target: {text: {value: text}}} = event
    const { props: { stickerId }} = this

    saveNote(sessionStorage.token, stickerId, text, error =>{
        if (error){
            alert(error.message)

            return
        }
        alert('Sticker saved!')

    })


}
   render () {

       return <div className="Sticker">
                        
        <button className="Button_Close" onClick={this.handleRemoveClick}>X</button>
           
        <form className="Sticker__form" onSubmit={this.handleSaveSubmit}>
        <textarea className="Sticker__text" name="text" defaultValue={this.props.text}></textarea>
        <p className="Sticker__id">{this.props.stickerId} </p>
        <button className="Btn__Save">➕</button>
        </form>
    </div>
   }


    /*     this.id = null

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
 */




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
        