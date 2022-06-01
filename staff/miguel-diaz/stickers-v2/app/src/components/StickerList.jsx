import { Component } from 'react'
import Logger from '../vendor/loggy'
import retrieveNotes from '../logic/retrieveNotes'
import Sticker from './Sticker'
import './StickerList.sass'

class StickerList extends Component {
    constructor() {
        super()

        this.state = { notes: null }

        this.logger = new Logger('StickerList')

        this.logger.info('constructor')
    }
    //state = { notes: null }

    componentDidMount() {
        this.logger.info('componentDidMount')

        this.loadNotes()
    }

    loadNotes = () =>
        retrieveNotes(sessionStorage.token, (error, notes) => {
            if (error) {
                alert(error.message)

                return
            }

            this.setState({ notes })
        })

    componentWillReceiveProps(newProps) {
        this.logger.info('componentWillReceiveProps')

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
        this.logger.info('render')

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


export default StickerList


// class StickerList extends Component {
//     constructor(){
//         super(`<ul class="StickerList__list Container"></ul>`)

//         if (sessionStorage.username)
//             retrieveNotes(sessionStorage.username, (error, notes) => {
//                 if (error) {
//                     alert(error.message)

//                     return
//                 }

//                 const items = notes.map(note => {
//                     const sticker = new Sticker
//                     sticker.setText(note.text)
//                     sticker.setId(note.id)

//                     const item = new StickerItem(sticker)

//                     sticker.onClose(() => this.remove(item))

//                     return item
//                 })

//                 this.add(...items)
//             })
//     }

//     addSticker(sticker) {
//         const item = new StickerItem(sticker)

//         this.add(item)
//     }


//     removeSticker(sticker) {
//         const items = this.container.children

//         for (let i = 0; i < items.length; i++) {
//             const item = items[i]

//             if (item.hasChild(sticker.container)) {
//                 this.container.removeChild(item)

//                 return
//             }
//         }
//     }

// }