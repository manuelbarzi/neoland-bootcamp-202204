const { Component } = React 

class StickerList extends Component {

    state = {notes: null}

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
    //     if (sessionStorage.username)
    //         retrieveNotes(sessionStorage.username, (error, notes) => {
    //             if (error) {
    //                 alert(error.message)

    //                 return
    //             }

    //             const items = notes.map(note => {
    //                 const sticker = new Sticker
    //                 sticker.setText(note.text)
    //                 sticker.setId(note.id)

    //                 const item = new StickerItem(sticker)

    //                 sticker.onClose(() => this.remove(item))

    //                 return item
    //             })

    //             this.add(...items)
    //         })
    // }

    // addSticker(sticker) {
    //     const item = new StickerItem(sticker)

    //     this.add(item)
    // }

    // removeSticker(sticker) {
    //     const items = this.container.children

    //     for (let i = 0; i < items.length; i++) {
    //         const item = items[i]

    //         if (item.hasChild(sticker.container)) {
    //             this.container.removeChild(item)

    //             return
    //         }
    //     }
    // }
}