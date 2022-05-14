const { Component } = React

class List extends Component {
    state = { notes: null, newNotes: [] }

    componentDidMount = () => {
        retrieveNotes(sessionStorage.token, (error, notes) => {
            if (error) {
                alert(error.message)
                return
            }
            this.setState({ notes })
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.newStickers !== prevProps.newStickers) {
            this.setState(({ newNotes }) => newNotes.push(new Note))
        }
    }

    handleOnRemovedSticker = id => {
        let notes = [...this.state.notes]

        notes = notes.filter(note => note.id !== id)

        this.setState({ notes })
    }

    handleOnClosedSticker = id => {
        let newNotes = [...this.state.newNotes]

 

        newNotes = newNotes.filter(note => note.id !== id)

        this.setState({ newNotes })
    }

    handlerOnSavedNote = (id, text) => {
        if (this.state.newNotes.length > 0) {
            const isNew = this.state.newNotes.some(note => note.id === id)

            if (isNew) {
                let newNotes = [...this.state.newNotes]

                const note = newNotes.find(note => note.id === id)

                note.text = text
                
                newNotes = newNotes.filter(note => note.id !== id)

                this.setState({ newNotes })

                let notes = []
                
                if (this.state.notes instanceof Array && this.state.notes.length > 0)
                    notes = [...this.state.notes]

                notes.push(note)

                this.setState({ notes })
            }
        }
    }

    render() {
        return <ul className='List'>

            {this.state.notes !== null && this.state.notes.map(note => <li key={note.id}>
                <Sticker
                    text={note.text}
                    username={this.props.username}
                    id={note.id}
                    view="view"
                    onRemovedSticker={this.handleOnRemovedSticker}
                    onClosedSticker={this.handleOnClosedSticker}
                    onSavedNote={this.handlerOnSavedNote}
                />
            </li>)}

            {this.state.newNotes.length > 0 && this.state.newNotes.map(note => <li key={note.id}> <Sticker text="" username={this.props.username} id={note.id} view="edit" onRemovedSticker={this.handleOnRemovedSticker} onClosedSticker={this.handleOnClosedSticker} onSavedNote={this.handlerOnSavedNote} /> </li>)}
        </ul>
    }
}