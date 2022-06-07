import { useState, useEffect, useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import retrieveNotes from '../logic/retrieveNotes'
import Sticker from './Sticker'



function StickerList({ timestamp }) {
    const logger = new Logger('StickerList')

    logger.info('call')

    // const noteState = useState(null)
    // const notes = notesState[0]
    // const setNotes = notesState[1]
    const [notes, setNotes] = useState(null)
    const { handleFeedback } = useContext(Context)

    // componentDidMount() {
    //     logger.info('componentDidMount')

    //     loadNotes()
    // }

    // componentWillReceiveProps(newProps) {
    //     logger.info('componentWillReceiveProps')

    //     if (props.timestamp !== newProps.timestamp)
    //         loadNotes()
    // }

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
        <p className="StickerList--white Container">No stickers yet</p>
}

export default StickerList