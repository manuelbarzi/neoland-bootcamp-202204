const { Component } = React

class StickerList extends Component {

    // constructor() {
    //     this.state = { notes: null }
    // } 

    state = { notes: null }

    componentDidMount() {
        retrieveNotes(sessionStorage.username, (error, notes) => {
            if (error) {
                alert(error.message)

                return
            }

            this.setState({ notes })
        })
    }

    componentWillReceiveProps(props) {

        const { newNotes } = props

        //con este metodo queremos extraer las notas creadas en Notes y las queremos concatenar con las notas que no estan salvadas en newNotes

        // const notes = [...this.state.notes, ...newNotes] esto fallo. ver 2205091038

        if (this.state.notes) {

            const notes = [...this.state.notes, ...newNotes]
            // const notes = this.stage.notes.concat(newNotes) también se podría haber hecho así

            this.setState({ notes })

        }
    }

    handleRemoveSticker = stickerId => {
        const notes = this.state.notes.filter(note => note.id !== stickerId)
        // devuelveme todas las notas excepto la nota que tiene un id. Es decir, esta, no me la devuelvas. La que tiene ese id da "false"

        this.setState({ notes })
        //una vez que tengo las notas actualizadas, con this setState actualizo la lista
    }

    // lo comentado y lo no comentado, hacen lo mismo. Ventajas de JS 6

    // render() {
    //     return <ul className="StickerList__list Container">
    //         {
    //             this.state.notes && <ul>
    //                 {this.state.notes.map(note => <li><Sticker text={note.text} /></li>)}
    //                 {/* mapeo el array para que convierta cada elemento en un un li */}
    //             </ul>
    //         }

    //     </ul>
    // }
    render() {
        const { state: { notes } } = this

        // return this.state.notes && this.state.notes.length && <ul className="StickerList__list Container">
        return notes && notes.length ?
            // este ternario se puede leer, si hay notas y si hay longitud, entonces, devuelvo el ul…

            <ul className="StickerList__list Container">
                {/* {this.state.notes.map(note => <li><Sticker text={note.text} /></li>)} */}
                {notes.map(note => <li key={note.id}><Sticker stickerId={note.id} text={note.text} onRemove={this.handleRemoveSticker} /></li>)}
                {/* onRemove viene a decir que se quiere quitar este sticker de la pantalla */}
            </ul>
            :
            <p>no stickers yet</p>
        // los dos puntos forman parte del ternario, creo, es lo que hará si no
        //el ul se muestra si cumple las dos condiciones, primero que no sea null, que hay algo ahí, y luego que tiene length, es decir, que al menos tenga una nota
    }
}