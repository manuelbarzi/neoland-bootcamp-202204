const { Component } = React

class Sticker extends Component {
    handleRemoveClick = () => {
        const { props: { stickerId, onRemove } } = this  //guardamos las propiedades de stickerId i de eliminar.

        if (stickerId)//si el sticker tiene id
            deleteNote(sessionStorage.token, stickerId, error => { //eliminaremos la nota pasandole el username guardado en la sesion i el sticker id i el error
                if (error) { //si da error
                    alert(error.message)

                    return
                }

                onRemove(stickerId) //sino elimina el sticker con ese id
            })
    }
    handleSaveSubmit = event => {
        event.preventDefault()

        const { target: { text: { value: text} } } = event  
        const { props: { stickerId }} = this

        saveNote(sessionStorage.token, stickerId, text, error => {
            if (error) {
                alert(error.message)

                return
            }

            alert('Sticker saved!')

        })
    }

    render() {
        return <div className="Sticker">
            <button className="Button" onClick={this.handleRemoveClick}>x</button>

            <form className="Sticker__form" onSubmit={this.handleSaveSubmit}>
                <textarea className="Sticker__text" name="text" defaultValue={this.props.text}></textarea>
                <p className="Sticker__id">{this.props.stickerId}</p> {/*le digo que el id del sticker será una propiedad del sticker que se llamara stickerId*/}

                <button className="Button">Save</button>
            </form>
        </div>
    }      

}

