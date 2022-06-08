import { useState, useEffect, useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import retrieveNotes from '../logic/retrieveNotes'
import Sticker from './Sticker'
import './StickerList.sass'

function StickerList({ timestamp }) {
    const logger = new Logger('StickerList')

    logger.info('call')

    const [notes, setNotes] = useState(null)
    const { handleFeedback } = useContext(Context)

    useEffect(() => {
        logger.info('componentDidMount | componentWillReceiveProps')

        loadNotes()
    }, [timestamp])

    const loadNotes = () =>
        retrieveNotes(sessionStorage.token, (error, notes) => {
            if (error) {
                handleFeedback({ level: 'error', message: error.message })

                return
            }

            setNotes(notes)
        })

    const handleRemoveSticker = stickerId => {
        const _notes = notes.filter(note => note.id !== stickerId)

        setNotes(_notes)
    }

    logger.info('render')

    return notes && notes.length ?
        <ul className="StickerList__list Container">
            {notes.map(note => <li key={note.id}>
                <Sticker stickerId={note.id} text={note.text} onRemove={handleRemoveSticker} />
            </li>)}
        </ul>
        :
        <p>no stickers yet</p>
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