import React from 'react'
import saveNote from '../logic/saveNote'
import deleteNote from '../logic/deleteNote'


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
        const { props: { stickerId, onSaved }} = this

        saveNote(sessionStorage.username, stickerId, text, error => {
            if (error) {
                alert(error.message)

                return
            }

            alert('Sticker saved!')

            onSaved(stickerId)
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

export default Sticker