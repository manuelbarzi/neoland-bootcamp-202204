const { Component } = React

class StickerList extends Component {

    state = { notes: null }

    // si se monta el componente, ejecuta esto
    componentDidMount() {
        retrieveNotes(sessionStorage.token, (error, notes) => {
            if (error) {
                alert(error.message)
                return
            }
            this.setState({ notes: notes })
        })
    }


    // si "algo" se actualiza (como las props), ejecuta esto, y te entran las props de antes
    /*
    componentDidUpdate(preProps) {
        if (preProps !== this.props) {
            const { newNotes } = this.props

        }
    }

    */


    // si las props cambian ejecuta esto
    componentWillReceiveProps(props) {
        const { newNotes } = props

        if (this.state.notes) {
            const notes = [...this.state.notes]

            newNotes.forEach(newNote => {
                const exist = notes.some(note => note.id === newNote.id)

                if (!exist)
                    notes.push(newNote)
            })
            
            this.setState({ notes })
        }
    }


    handleStickerSaved = stickerId => {
        this.props.handleStickerSaved(stickerId)
    }


    handleRemoveSticker = stickerId => {
        const notes = this.state.notes.filter( note => note.id !== stickerId)
        this.setState({ notes })
    }


    
    render() {
        const { state: { notes } } = this

        return notes && notes.length ?
         <ul className = "List__stickers" >
             {notes.map(note => <li className="Li__sticker" key={note.id} >
                 <Sticker stickerId={note.id} text={note.text} onSaved={this.handleStickerSaved} onRemove={this.handleRemoveSticker}/>
             </li>)}
         </ul>
         : 
         <div className="Container Padding">
            <p> No notes yet </p>
         </div>
    }
}