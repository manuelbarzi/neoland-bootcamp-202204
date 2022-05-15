const { useContext } = React

function Sticker(props) {
    const logger = new Logger('Sticker')

    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const handleRemoveClick = () => {
        const { stickerId, onRemove } = props

        if (stickerId)
            try {
                deleteNote(sessionStorage.token, stickerId, error => {
                    if (error) {
                        handleFeedback({ level: 'error', message: error.message })
    
                        return
                    }
    
                    onRemove(stickerId)
                })
            } catch (error) {
                handleFeedback({ level: 'error', message: error.message })
            }
    }

    const handleSaveSubmit = event => {
        event.preventDefault()

        const { target: { text: { value: text } } } = event
        const { stickerId } = props

        try {
            saveNote(sessionStorage.token, stickerId, text, error => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })
    
                    return
                }
    
                handleFeedback({ level: 'success', message: 'Sticker saved!' })
            })
        } catch (error) {
            handleFeedback({ level: 'error', message: error.message })
        }
    }


    logger.info('render')

    return <div className="Sticker">
        <button className="Button Button--no-border Button--close" onClick={handleRemoveClick}>x</button>

        <p className="Sticker__id">{props.stickerId}</p>

        <form className="Sticker__form" onSubmit={handleSaveSubmit}>
            <textarea className="Sticker__text" name="text" defaultValue={props.text}></textarea>

            <button className="Button">Save</button>
        </form>
    </div>

}
