const { useState, useEffect, useContext } = React
// sin useEffect tambien funciona
// useEffect maneja los ciclos de vida de comando

function StickerList({ timestamp }) { // timestamp son las props desestructuradas

    const { handleFeedback } = useContext(Context)

    const [notes, setNotes] = useState(null)


    // si se monta el componente, ejecuta esto
    useEffect(() => {
        loadNotes()
    }, [timestamp]) // si pongo un array vacio ejecutara esto la primera vez, cuando carga el componente
    // al ponerle las props, tambien ejecutara cuando cambien las props


    const loadNotes = () => {
        try {
            retrieveNotes(sessionStorage.token, (error, notes) => {
                if (error) {
                    handleFeedback({ type: 'error', message: error.message})
                    return
                }
                setNotes(notes)
            })
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
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