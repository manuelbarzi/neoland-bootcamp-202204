
function Sticker(props) {
    
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
    const  { stickerId } = props

    saveNote(sessionStorage.token, stickerId, text, error => {
        if (error) {
            aletr(error.message)

            return
        }
        alert('Sticker saved!')

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
