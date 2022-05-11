const { Component } = React

class StickerList extends Component {
    state = { notes: null }  //creo una propiedad de estado en la que notas es null por defecto

    componentDidMount(){ //lo usamos para guardar información en la sessionstorage
        retrieveNotes(sessionStorage.username, (error, notes) => {
            if (error) {
                alert(error.message)

                return
            }

            this.setState({ notes }) //recupera la propiedad notas en el estado en el que cambie
        })
    }

    componentWillReceiveProps(props) {  //componente que se usa cuando las propiedades cambian
        const { newNotes } = props //creamos una constante que seran los nuevos estados de notes (la nueva propiedad de status notes) que la recibiremos a través de props

        if (this.state.notes){ //si las notas son null
            const notes = [...this.state.notes] //creamos un nuevo array a partir del anterior con las nuevas notas que se llamará notes
        
            newNotes.forEach(newNote => { //por cada nuevo estado de notes, es decir que ya no sea null, le pasaremos una nueva nota como parametro
                const exists = notes.some(note => note.id ===newNote.id) //con la que a través del some buscaremos el id de la nota que coincida con el id de la nueva nota

                if(!exists) //si el id de note no coincide con el id de newnote
                    notes.push(newNote) //añadiremos al nuevo array la nueva nota
            })
            this.setState({ notes }) //cambio de estado
        }
    }
    
    handleRemoveSticker = stickerId => {  //cremos el método de handleRemoveSticker donde le pasamos el parametro de stickerId para encontrarlo(callback)
        const notes = this.state.notes.filter(note => note.id !== stickerId) //guardamos en notes, todas las notas filtrandolas con filter y no cogiendo aquella note.id que sea igual al id del sticker que habiamos usado como parametro

        this.setState ({ notes }) //cambio de estado
        
    }
    
    handleStickerSaved = stickerId =>{
        this.props.handleStickerSaved(stickerId)
    }

    render() {
        const { state: { notes } } = this

        return notes && notes.length ? //pinta si hay notas y si por lo tanto la stickerlist tiene length.
            <ul className="StickerList__list Container">
                {notes.map(note => <li key={note.id}> {/*en cada nota se le pone su id*/}
                    <Sticker stickerId={note.id} text={note.text} onRemove={this.handleRemoveSticker} onSaved={this.handleStickerSaved} /> 
                    </li>)}
            </ul>
            : //si no tiene notes ni largura que pinte no stickers yet
            <p>no stickers yet</p>
    }

}
/* EN EL RENDER VEMOS QUE STICKER LIST TIENE HIJOS. EL STICKER TIENE:
- UN IDENITIFICADOR DE NOTA, NOTE.ID
- TEXTO REFERENCIADO COMO NOTE.TEXT
-UN REMOVE REFERENCIADO COMO THIS.HANDLEREMOVESTICKER
-UN GUARDADO
*/

