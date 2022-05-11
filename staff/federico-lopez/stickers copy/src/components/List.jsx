const { Component } = React

class List extends Component {
    state = { notes: null, newStickers: this.props.newStickers }

    componentDidMount = () => {
        retrieveNotes(this.props.username, (error, notes) => {
            if (error) {
                alert(error.message)
                return
            }
            this.setState({ notes })
        })
    }

    handleOnRemovedSticker = () => {
        // VER!!
    }

    handleOnClosedSticker = idExists => {
        if(idExists) {
            // VER!!
        }
    }

    stickersEditables = () => {
        const arrayOfNewStickers = []
        for (let i = 0; i < this.props.newStickers; i++) {
            const newSticker = <li> <Sticker username={this.props.username} id={null} view="edit" onRemovedSticker={this.handleOnRemovedSticker} onClosedSticker={this.handleOnClosedSticker} /> </li>
            
            arrayOfNewStickers.push(newSticker)
        }
        return arrayOfNewStickers
    }

    render() {
        return <ul className='List'>
            {this.state.notes !== null && this.state.notes.map(note => <li key={note.id}> <Sticker text={note.text} username={this.props.username} id={note.id} view="view" onRemovedSticker={this.handleOnRemovedSticker} onClosedSticker={this.handleOnClosedSticker} /> </li>)}
            {this.stickersEditables()}            
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