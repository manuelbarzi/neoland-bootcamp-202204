const { useState } = React

function Sticker(props) {
    // state = {error: null, alert: null}
    const [alert, setAlert] = useState(null)

    const handleRemoveClick = () => {
        // const { props: { stickerId, onRemove } } = this
        const { stickerId, onRemove } = props

        if (stickerId)
            deleteNote(sessionStorage.token, stickerId, error => {
                if (error) {
                    setAlert(<Alert error message={error.message} />)
                    setTimeout( () => {
                        setAlert(null)
                    }, 4000 )
                    return
                }
                onRemove(stickerId)
            })
    }

    const handleSaveSubmit = event => {
        event.preventDefault()
        const { target: { text: { value: text } } } = event
        // const { props: { stickerId }} = this
        const {stickerId} = props

        saveNote(sessionStorage.token, stickerId, text, error => {
            if (error) {
                setAlert(<Alert error message={error.message} />)
                setTimeout( () => {
                    setAlert(null)
                }, 4000 )
                return
            }

            setAlert(<Alert message='Sticker Saved' />)
                setTimeout( () => {
                    setAlert(null)
                }, 4000 )
        })
    }


    return <div className="Sticker">

        {alert && alert}

        <button className="Button" onClick={handleRemoveClick}>x</button>

        <form className="Sticker__form" onSubmit={handleSaveSubmit}>
            <textarea className="Sticker__text" name="text" defaultValue={props.text}></textarea>
            <p className="Sticker__id">{props.stickerId}</p>

            <button className="Button">Save</button>
        </form>
    </div>
}