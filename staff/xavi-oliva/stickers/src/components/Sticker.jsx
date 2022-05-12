function Sticker(props) {
    const logger = new Logger('Sticker')

    logger.info('call')

    const handleRemoveClick = () => {
        const { stickerId, onRemove } = props

        if (stickerId)
            deleteNote(sessionStorage.token, stickerId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onRemove(stickerId)
            })
    }

    const handleSaveSubmit = event => {
        event.preventDefault()

        const { target: { text: { value: text } } } = event
        const { stickerId } = props

        saveNote(sessionStorage.token, stickerId, text, error => {
            if (error) {
                alert(error.message)

                return
            }

            alert('Sticker saved!')
        })
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
