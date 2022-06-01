import saveNote from "../logic/saveNotes"
import deleteNote from "../logic/deleteNote"

import { useContext } from 'react'
import Context from "./Context"



function Sticker(props) {
    const { handleFeedback } = useContext(Context)
    const handleRemoveClick = () => {

        const { stickerId, onRemove } = props

    if (stickerId)
        deleteNote(sessionStorage.token, stickerId, error => {
            if (error) {
                handleFeedback(error.message)

                return
            }
            onRemove(stickerId)
        })
}

const handleSaveSubmit = event => {
    event.preventDefault()

    const { target: { text: { value: text } } } = event
    const  { stickerId } = props

    saveNote(sessionStorage.token, stickerId, text, error => {
        if (error) {
            handleFeedback(error.message)

            return
        }
        handleFeedback({level:"confirm", message:"Sticker saved"})

    })
}




return <div className="Sticker">

    <button className="Button_Close" onClick={handleRemoveClick}>X</button>

    <form className="Sticker__form" onSubmit={handleSaveSubmit}>
        <textarea className="Sticker__text" name="text" defaultValue={props.text}></textarea>
        <p className="Sticker__id">{props.stickerId} </p>
        <button className="Btn__Save">➕</button>
    </form>
</div>
}
export default Sticker