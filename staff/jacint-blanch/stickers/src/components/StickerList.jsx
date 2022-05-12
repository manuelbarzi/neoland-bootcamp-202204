const { Component } = React

class StickerList extends Component {
    constructor() {
        super()

        this.state = { notes: null }


    }
    //state = { notes: null }

    componentDidMount() {

        this.loadNotes()
    }

    loadNotes = () => {

        retrieveNotes(sessionStorage.token, (error, notes) => {
            
            if (error) {
                alert(error.message)

                return
            }

            this.setState({ notes })
        })
    }

    componentWillReceiveProps(newProps) {

        if (this.props.timestamp !== newProps.timestamp)
            this.loadNotes()
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
                    <Sticker stickerId={note.id} text={note.text} onRemove={this.handleRemoveSticker} />
                </li>)}
            </ul>
            :
            <p>no stickers yet</p>
    }
}