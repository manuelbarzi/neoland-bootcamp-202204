function Sticker (props) {

    const handleCloseClick = () => {
        const { stickerId, onRemove } = props


        if (stickerId)
            deleteNote(sessionStorage.token, stickerId, error => {
                if (error) {
                    if(error.message === `note with id "${stickerId}" does not exist`)
                        onRemove(stickerId)
                    else alert(error.message)
                    return
                }
                onRemove(stickerId)
            })
        
    }


    const handleSaveClick = (event) => {
        event.preventDefault()
        
        //const{ target: { text: { value: text }}} = event
        const text = event.target.text.value
        const { stickerId } = props


        saveNote(sessionStorage.token, stickerId, text, error => {
            if (error) {
                alert(error.message)
                return
            }
            
            alert('Sticker saved! ')
        })
    }

    
    return <div className="Sticker">
        <button className="Transparent" onClick={handleCloseClick}>❌</button>
        <form className="Sticker__form" onSubmit={handleSaveClick}>
            <textarea name="text" defaultValue={props.text}></textarea>
            <button type="submit" className="save-button">Save</button>
        </form>
    </div>
}