const { Component } = React

class Sticker extends Component {
    state = { view: this.props.view, text: this.props.text }

    handleEditButton = event => {
        event.preventDefault()

        this.setState({ view: 'edit' })
    }

    handleRemoveButton = event => {
        event.preventDefault()

        deleteNote(sessionStorage.token, this.props.id, error => {
            if (error) {
                alert(message.error)
            }
        })

        this.props.onRemovedSticker(this.props.id)
    }

    handleOnSubmitForm = event => {
        event.preventDefault()

        saveNote(sessionStorage.token, this.props.id, event.target.text.value, error => {
            if (error)
                alert(error.message)
        })

        this.setState({ text: event.target.text.value })

        this.setState({ view: 'view' })

        this.props.onSavedNote(this.props.id, event.target.text.value)
    }

    handleCloseClick = event => {
        event.preventDefault()

        noteIsSaved(sessionStorage.token, this.props.id, (error, isSaved) => {
            if (error)
                alert(error.message)
            else
                if (isSaved)
                    this.setState({ view: 'view' })
                else
                    this.props.onClosedSticker(this.props.id)
        })
    }

    render() {
        return <div className="Sticker" key={this.props.id} >

            {
                this.state.view === 'view' &&
                <div className="Sticker__View">
                    <div className="noteButtons">
                        <a className="editButton" onClick={this.handleEditButton}>Edit</a>
                        <a className="removeButton" onClick={this.handleRemoveButton}>Remove</a>
                    </div>
                    <p className="noteText">{this.state.text}</p>
                </div>
            }

            {
                this.state.view === 'edit' &&
                <div className="Sticker__Edit">
                    <a className="xButton" onClick={this.handleCloseClick}>x</a>
                    <form className="Sticker__form" onSubmit={this.handleOnSubmitForm} >
                        <textarea className="textarea" name="text" defaultValue={this.state.text} ></textarea>
                        <button className="saveButton">Save</button>
                    </form>
                </div>
            }
        </div>
    }
}