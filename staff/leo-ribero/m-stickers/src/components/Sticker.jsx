const { Component } = React

class Sticker extends Component {
    handleRemoveClick = () => {

        const { props: { stickerId, onRemove }} = this

        // if (this.props.stickerId) en últimas es una id "stickerId" y un callback "onRemove"
        if (stickerId)
        // si ya me viene una nota ya creada
        deleteNote(sessionStorage.username, this.props.stickerId, error => {
        //para este usuario, borra esta nota    
            if (error) {
                alert(error.message)

                return
            }

            // this.props.onRemove(this.props.stickerId) ver destructuracion de este snippet arriba donde u
            onRemove(stickerId)
        })
        
    }

    handleSaveSubmit = event => {
        event.preventDefault()

        const { target: { text : { value: text } } } = event

        // updateNote(sessionStorage.username, this.id, text, error => {
            updateNote(sessionStorage.username, this.props.stickerId, text, error => {    
            if (error) {
                alert(error.message)

                return
            }
            alert('Sticker updated!')
            //video 2205091010

        })
    }

    render() {
        return <div className="Sticker">
            <button className="Button" onClick={this.handleRemoveClick}>x</button>
            <form className="Sticker__form" onSubmit={this.handleSaveSubmit}>
                {/* <textarea className="Sticker__text" name="text">{this.props.text}</textarea> 2205090948 */}
                <textarea className="Sticker__text" name="text" defaultValue={this.props.text}></textarea>
                
                <p className="Sticker__id">{this.props.stickerId}</p>
                
                <button className="Button">Save</button>
            </form>
        </div>
    }
}