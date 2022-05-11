const { Component } = React

class StickerList extends Component {

    state = { notes: null }

    // si se monta el componente, ejecuta esto
    componentDidMount() {
        this.loadNotes()
    }



    loadNotes = () => retrieveNotes(sessionStorage.token, (error, notes) => {
        if (error) {
            alert(error.message)
            return
        }

        this.setState({ notes })
    })


    // si las props cambian ejecuta esto
    componentWillReceiveProps(newProps) {
        if (this.props.timestamp !== newProps.timestamp)
        this.loadNotes()
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
                 <Sticker stickerId={note.id} text={note.text} onRemove={this.handleRemoveSticker}/>
             </li>)}
         </ul>
         : 
         <div className="Container Padding">
            <p> No stickers yet </p>
         </div>
    }
}