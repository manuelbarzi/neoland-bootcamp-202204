const { Component } = React

class List extends Component {
    state = { notes: null, newNotes: [] }

    componentDidMount = () => {
        retrieveNotes(this.props.username, (error, notes) => {
            if (error) {
                alert(error.message)
                return
            }
            this.setState({ notes })
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.newStickers !== prevProps.newStickers) {
            // const newNote = new Note

            // const newNotes = [...this.state.newNotes]

            // newNotes.push(newNote)

            
        }
    }

    foo = () => {
        this.setState(({ newNotes }) => {
            newNotes.push(new Note)
            return {newNotes}
        })
    }

    handleOnRemovedSticker = () => {

    }

    handleOnClosedSticker = id => {

    }

    handlerOnSavedNote = id => {
        if (this.state.newNotes.length > 0) {
            const isNew = this.state.newNotes.some(note => note.id === id)

            if (isNew) {
                let newNotes = [...this.state.newNotes]

                const note = newNotes.find(note => note.id === id)

                newNotes = newNotes.filter(note => note.id !== id)

                this.setState({ newNotes })

                const notes = [...this.state.notes]

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


//         home.onClickAdd(() => {
//             const sticker = new Sticker

//             sticker.toEditMode()

//             this.add(sticker)

//             sticker.onClose((idExists) => {
//                 if (!idExists)
//                     this.remove(sticker)
//             })

//             sticker.onRemove(() => {
//                 this.remove(sticker)
//             })
//         })
//     }
// }