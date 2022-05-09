const { Component } = React

class Sticker extends Component {
    state = { view: this.props.view, text: this.props.text, id: this.props.id }

    handleEditButton = event => {
        event.preventDefault()

        this.setState({ view: 'edit' })
    }

    handleRemoveButton = event => {
        event.preventDefault()

        deleteNote(this.props.username, this.state.id, error => {
            if (error) {
                alert(message.error)
            }
        })
        this.props.onRemovedSticker()
        // callback() TODO -> HOW TO CLOSE THE STICKER WHEN IS DELETED
    }

    handleOnSubmitForm = event => {
        event.preventDefault()

        if (!this.state.id) {
            createNote(this.props.username, event.target[0].value, (error, note) => {
                if (error)
                    alert(error.message)
                else
                    this.setState({ id: note.id })
            })
        } else {
            updateNote(this.props.username, this.state.id, event.target[0].value, error => {
                if (error)
                    alert(error.message)
            })
        }
        this.setState({ text: event.target[0].value })

        this.setState({ view: 'view' })
    }

    handleCloseClick = event => {
        event.preventDefault()

        const idExists = !!this.state.id
        if (idExists)
            this.setState({ view: 'view' })

        this.props.onClosedSticker(idExists)
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
                        <textarea className="textarea" name="text">{this.state.text}</textarea>
                        <button className="saveButton">Save</button>
                    </form>
                </div>
            }

        </div>
    }
}