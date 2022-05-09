const { Component } = React

class Sticker extends Component {
    handleRemoveClick = () => {
        const { props: { stickerId, onRemove } } = this

        if (stickerId)
            deleteNote(sessionStorage.username, stickerId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onRemove(stickerId)
            })
    }

    handleSaveSubmit = event => {
        event.preventDefault()

        const { target: { text: { value: text } } } = event

        updateNote(sessionStorage.username, this.props.stickerId, text, error => {
            if (error) {
                alert(error.message)

                return
            }

            alert('Sticker updated!')
        })
    }

    render() {
        return <div className="Sticker">
            <button className="Button" onClick={this.handleRemoveClick}>x</button>

            <form className="Sticker__form" onSubmit={this.handleSaveSubmit}>
                <textarea className="Sticker__text" name="text" defaultValue={this.props.text}></textarea>
                <p className="Sticker__id">{this.props.stickerId}</p>

                <button className="Button">Save</button>
            </form>
        </div>
    }
}