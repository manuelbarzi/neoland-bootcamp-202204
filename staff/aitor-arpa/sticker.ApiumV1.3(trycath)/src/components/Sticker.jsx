const { useContext } = React

function Sticker(props) {
    const { handleFeedeback } = useContext(Context)
    const handleRemoveClick = () => {

        const { stickerId, onRemove } = props

    if (stickerId)
        deleteNote(sessionStorage.token, stickerId, error => {
            if (error) {
                handleFeedeback(error.message)

                return
            }
            onRemove(stickerId)
        })
}

const handleSaveSubmit = event => {
    event.preventDefault()

    const { target: { text: { value: text } } } = event
    const { props: { stickerId } } = this

    saveNote(sessionStorage.token, stickerId, text, error => {
        if (error) {
            handleFeedeback(error.message)

            return
        }
        handleFeedeback('Sticker saved!')

    })
}




return <div className="Sticker">

    <button className="Button_Close" onClick={handleRemoveClick}>X</button>

    <form className="Sticker__form" onSubmit={handleSaveSubmit}>
        <textarea className="Sticker__text" name="text" defaultValue={props.text}></textarea>
        <p className="Sticker__id">{props.stickerId} </p>
        <button className="Btn__Save">➕</button>
    </form>
</div>
}
