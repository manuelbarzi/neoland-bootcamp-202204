const {useContext} = React

function Sticker(props) {
    const logger = new Logger('Sticker')

    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const handleRemoveClick = () => {
        const { stickerId, onRemove } = props 
        try {
            if (stickerId)
            deleteNote(sessionStorage.token, stickerId, error => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message})

                    return
                }

                onRemove(stickerId)
                handleFeedback({ type:'success', message: 'Sticker has been deleted'})
            })
        } catch (error) {
            handleFeedback({ level: 'error', message: error.message})
        }
    }

    const handleSaveSubmit = event => {
        event.preventDefault()

        //const { target: { text: { value: text } } } = event
        const text = event.target.text.value
        const { stickerId } = props

        try {
            saveNote(sessionStorage.token, stickerId, text, error => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message})
    
                    return
                }
    
                handleFeedback({ level: 'success', message: 'sticker has been saved!'})
            })
        } catch (error) {
            handleFeedback({ level: 'error', message: error.message})
        }
    }

    logger.info('render')
    
    return <div className="Sticker">
        <button className="Button" onClick={handleRemoveClick}>x</button>
        <form className="Sticker__form" onSubmit={handleSaveSubmit}>
            <textarea className="Sticker__text" name="text" defaultValue={props.text}></textarea>
            <p className="Sticker__id">{props.stickerId}</p>
            <button className="Button">Save</button>
        </form>
    </div>
    
}




