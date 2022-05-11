const { Component } = React

class StickerList extends Component {
    state = { notes: null }  //creo una propiedad de estado en la que notas es null por defecto

    componentDidMount(){ //lo usamos para guardar información en la sessionstorage
        this.loadNotes()
    }

    loadNotes = () => retrieveNotes(sessionStorage.token, (error, notes) => {
        if (error) {
            alert(error.message)
            return
        }

        this.setState({ notes })
    })

    componentWillReceiveProps(newProps) {  //componente que se usa cuando las propiedades cambian
        if (this.props.timestamp !== newProps.timestamp)
        this.loadNotes()
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
                    <Sticker stickerId={note.id} text={note.text} onRemove={this.handleRemoveSticker} /> 
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

