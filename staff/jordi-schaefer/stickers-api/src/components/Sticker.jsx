const { Component } = React

class Sticker extends Component {


    handleCloseClick = () => {
        const { props: { stickerId, onRemove }} = this


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



    handleSaveClick = (event) => {
        event.preventDefault()
        
        //const{ target: { text: { value: text }}} = event
        const text = event.target.text.value
        const { props: { stickerId }} = this


        saveNote(sessionStorage.token, stickerId, text, error => {
            if (error) {
                alert(error.message)
                return
            }

            alert('Sticker saved! ')
        })
    }

    
    render() {
        return <div className="Sticker">
            <button className="Transparent" onClick={this.handleCloseClick}>❌</button>
            <form className="Sticker__form" onSubmit={this.handleSaveClick}>
                <textarea name="text" defaultValue={this.props.text}></textarea>
                <button type="submit" className="save-button">Save</button>
            </form>
        </div>
    }
}