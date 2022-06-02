import { useState, useEffect } from "react"
import retrieveNotes from "../logic/retrieveNotes"
import Sticker from "./Sticker"

function StickerList({ timestamp }) {
    const [notes, setNotes] = useState(null)
   


    useEffect(() => {
        loadNotes()
    }, [timestamp])


    const loadNotes = () =>
        retrieveNotes(sessionStorage.token, (error, notes) => {
            if (error) {
                alert(error.message)

                return
            }

            setNotes(notes)
        })



    const handleRemoveSticker = stickerId => {
        const _notes = notes.filter(note => note.id !== stickerId)

        setNotes( _notes )
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
export default StickerList