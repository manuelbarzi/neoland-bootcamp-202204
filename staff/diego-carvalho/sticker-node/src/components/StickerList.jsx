import { useState, useEffect, useContext} from 'react'
import React from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import retrieveNotes from '../logic/retrieveNotes'
import Sticker from './Sticker'
import './StickerList.sass'

function StickerList({timestamp}){
    const logger = new Logger('StickerList')

    logger.info('call')

    const {handleFeedback} = useContext(Context)
    
    const [notes, setNotes] = useState(null)
    
    useEffect(() => {
        logger.info('componentDidMount | componentWillReceiveProps')

        loadNotes()
    }, [timestamp])

    const loadNotes = () => {
        try {
            retrieveNotes(sessionStorage.token, (error, notes) => {
                if (error) {
                    handleFeedback({level: 'error', message: error.message})
    
                    return
                }
                setNotes( notes )
            })
        } catch (error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    
    }
    const handleRemoveSticker = stickerId => {
        const _notes = notes.filter(note => note.id !== stickerId)

        setNotes(_notes )
    }
    
    logger.info('render')

    return notes && notes.length ?
        <ul className="StickerList__list Container">
            {notes.map(note => <li key={note.id}>
                <Sticker stickerId={note.id} text={note.text} onRemove={handleRemoveSticker} />
            </li>)}
        </ul>
        :
        <p>no sticker yet</p>
}
export default StickerList
