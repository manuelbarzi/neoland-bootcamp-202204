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
            //const notes = [...this.state.notes, ...newNotes]
            const notes = this.state.notes.concat(newNotes)
    
            this.setState({ notes })
        }
    }

    handleRemoveSticker = stickerId => {
        const notes = this.state.notes.filter(note => note.id !== stickerId)

        this.setState({ notes })
    }

    render() {
        const { state: { notes } } = this

        return notes && notes.length ?
            <ul className="StickerList__list Container">
                {notes.map(note => <li key={note.id}><Sticker stickerId={note.id} text={note.text} onRemove={this.handleRemoveSticker} /></li>)}
            </ul>
            :
            <p>no stickers yet</p>
    }
}