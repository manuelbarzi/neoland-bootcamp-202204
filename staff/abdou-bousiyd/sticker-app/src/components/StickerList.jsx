const { Component } = React 

class StickerList extends Component {

    state = {notes: null, error: null, alert: null}

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        retrieveNotes(sessionStorage.token, (error, notes) => {
            if (error) {
                this.setState({ alert : <Alert error message={error.message} />})
                setTimeout( () => {
                    this.setState({alert: null})
                }, 4000 )
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
        const { state: { notes, alert } } = this

        return notes && notes.length ?
            <ul className="StickerList__list _Container">
                
                {notes.map(note => <li key={note.id}>
                    <Sticker stickerId={note.id} text={note.text} onRemove={this.handleRemoveSticker} />
                    </li>)}
            </ul>
            :
            <div>
                <p>no stickers yet</p>
                {alert && alert}
            </div>
            
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