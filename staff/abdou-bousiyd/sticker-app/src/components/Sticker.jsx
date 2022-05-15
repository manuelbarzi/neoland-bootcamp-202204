const { Component } = React

class Sticker extends Component {
    
    state = {error: null, alert: null}


    handleRemoveClick = () => {
        const { props: { stickerId, onRemove } } = this

        if (stickerId)
            deleteNote(sessionStorage.token, stickerId, error => {
                if (error) {
                    this.setState({ alert : <Alert error message={error.message} />})
                    setTimeout( () => {
                        this.setState({alert: null})
                    }, 4000 )
                    return
                }
                onRemove(stickerId)
            })
    }

    handleSaveSubmit = event => {
        event.preventDefault()
        const { target: { text: { value: text } } } = event
        const { props: { stickerId }} = this

        saveNote(sessionStorage.token, stickerId, text, error => {
            if (error) {
                this.setState({ alert : <Alert error message={error.message} />})
                setTimeout( () => {
                    this.setState({alert: null})
                }, 4000 )
                return
            }

            this.setState({ alert : <Alert message='Sticker Saved' />})
                setTimeout( () => {
                    this.setState({alert: null})
                }, 4000 )
            // alert('Sticker saved!')
        })
    }

    render() {
        const {state: {alert}} = this


        return <div className="Sticker">

            {alert && alert}

            <button className="Button" onClick={this.handleRemoveClick}>x</button>

            <form className="Sticker__form" onSubmit={this.handleSaveSubmit}>
                <textarea className="Sticker__text" name="text" defaultValue={this.props.text}></textarea>
                <p className="Sticker__id">{this.props.stickerId}</p>

                <button className="Button">Save</button>
            </form>
        </div>
    }
}