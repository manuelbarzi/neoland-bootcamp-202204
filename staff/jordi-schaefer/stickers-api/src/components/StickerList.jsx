const { useState } = React

function StickerList({ timestamp }) {

    const [notes, setNotes] = useState(null)

    // si se monta el componente, ejecuta esto
    useEffect(() => {
        loadNotes()
    }, [timestamp])


    const loadNotes = () => {
        try {
            retrieveNotes(sessionStorage.token, (error, notes) => {
                if (error) {
                    alert(error.message)
                    return
                }
                setNotes(notes)
            })
        } catch(error) {
            alert(error.message)
        }
    }


    const handleRemoveSticker = stickerId => {
        const _notes = notes.filter( note => note.id !== stickerId)
        setNotes(_notes)
    }


    return notes && notes.length ?
        <ul className = "List__stickers" >
            {notes.map(note => <li className="Li__sticker" key={note.id} >
                <Sticker stickerId={note.id} text={note.text} onRemove={handleRemoveSticker}/>
            </li>)}
        </ul>
        : 
        <div className="Container Padding">
            <p> No stickers yet </p>
        </div>
}