const { Component } = React

class StickerList extends Component {
    state = { notes: null }

    componentDidMount() {
        retrieveNotes(sessionStorage.username, (error, notes) => {
            if (error) {
                alert(error.message)

                return
            }

            this.setState({ notes })
        })
    }

    componentWillReceiveProps(props) {
        const { newNotes } = props

        if (this.state.notes) {
            const notes = [...this.state.notes]

            newNotes.forEach(newNote => {
                const exists = notes.some(note => note.id === newNote.id)

                if (!exists)
                    notes.push(newNote)
            })
    
            this.setState({ notes })
        }
    }

    handleRemoveSticker = stickerId => {
        const notes = this.state.notes.filter(note => note.id !== stickerId)

        this.setState({ notes })
    }

    handleStickerSaved = stickerId => {
        this.props.handleStickerSaved(stickerId)
    }

    render() {
        const { state: { notes } } = this

        return notes && notes.length ?
            <ul className="StickerList__list Container">
                {notes.map(note => <li key={note.id}>
                    <Sticker stickerId={note.id} text={note.text} onRemove={this.handleRemoveSticker} onSaved={this.handleStickerSaved} />
                    </li>)}
            </ul>
            :
            <p>no stickers yet</p>
    }
}