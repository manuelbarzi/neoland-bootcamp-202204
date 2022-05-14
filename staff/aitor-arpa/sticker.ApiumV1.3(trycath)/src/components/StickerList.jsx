const { useState, useEffect } = React

function StickerList({ timestamp }) {
    const [notes, setNotes] = useState(null)
    const { handleFeedeback } = useContext(Context)

    useEffect(() => {
        loadNotes()
    }, [timestamp])


    const loadNotes = () =>
        retrieveNotes(sessionStorage.token, (error, notes) => {
            if (error) {
                handleFeedeback(error.message)

                return
            }

            setNotes(notes)
        })



    const handleRemoveSticker = stickerId => {
        const notes = state.notes.filter(note => note.id !== stickerId)

        setNotes( notes )
    }

    const handleStickerSaved = stickerId => {
        props.handleStickerSaved(stickerId)
    }

    return notes && notes.length ?

        <ul className="StickerList__list Container">

            {notes.map(note => <li key={note.id}>
                <Sticker stickerId={note.id} text={note.text} onRemove={handleRemoveSticker} />
                </li>)}
        </ul>
        :
        <p>Pulsa en ➕ para Un nuevo Sticker</p>


}