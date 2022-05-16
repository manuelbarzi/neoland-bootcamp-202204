import { useContext } from 'react'
import Context from './Context'
import deleteNote from '../logic/deleteNote'
import saveNote from '../logic/saveNote'

function Sticker (props) {

    const { handleFeedback } = useContext(Context)

    const handleCloseClick = () => {
        const { stickerId, onRemove } = props

        if (stickerId) {
            try {
                deleteNote(sessionStorage.token, stickerId, error => {
                    if (error) {
                        if(error.message === `note with id "${stickerId}" does not exist`)
                            onRemove(stickerId)
                        else handleFeedback({ type: 'error', message: error.message})
                        return
                    }
                    onRemove(stickerId)
                    handleFeedback({ type: 'success', message: 'Sticker deleted'})
                })
            } catch(error) {
                handleFeedback({ type: 'error', message: error.message})
            }
        }
    }


    const handleSaveClick = (event) => {
        event.preventDefault()
        
        //const{ target: { text: { value: text }}} = event
        const text = event.target.text.value
        const { stickerId } = props

        try {
            saveNote(sessionStorage.token, stickerId, text, error => {
                if (error) {
                    handleFeedback({ type: 'error', message: error.message})
                    return
                }
                handleFeedback({ type: 'success', message: 'Sticker saved!'})
            })
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }

    
    return <div className="Sticker">
        <button className="Transparent" onClick={handleCloseClick}>❌</button>
        <form className="Sticker__form" onSubmit={handleSaveClick}>
            <textarea name="text" defaultValue={props.text}></textarea>
            <button type="submit" className="save-button">Save</button>
        </form>
    </div>
}

export default Sticker