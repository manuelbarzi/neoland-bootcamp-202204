import {useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import retrieveNotes from '../logic/retrieveNotes'
import deleteNote from '../logic/deleteNote'
import saveNote from '../logic/saveNote'
import './StickerList.sass'


function Sticker(props) {
    const logger = new Logger('Sticker')

    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const handleRemoveClick = () => {
        const { stickerId, onRemove } = props  //guardamos las propiedades de stickerId i de eliminar.

        if (stickerId) {//si el sticker tiene id
            try{
                deleteNote(sessionStorage.token, stickerId, error => { //eliminaremos la nota pasandole el username guardado en la sesion i el sticker id i el error
                    if (error) { //si da error
                        handleFeedback({ level: 'error', message: error.message })

                        return
                    }

                    onRemove(stickerId) //sino elimina el sticker con ese id
                })
            }catch(error) {
                handleFeedback({ level: 'error', message: error.message })
            }
        }
    }

    const handleSaveSubmit = event => {
        event.preventDefault()

        const { target: { text: { value: text} } } = event  //del form
        const { stickerId } = props

        try{
            saveNote(sessionStorage.token, stickerId, text, error => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })

                    return
                }
                handleFeedback({ level: 'success', message: 'Sticker saved!'})
            })
        }catch(error){
            handleFeedback({ level: 'error', message: error.message })
        }
    }

    logger.info('render')
    return <div className="Sticker Container">
        <button className="Button" onClick={handleRemoveClick}>x</button>

        <form className="Sticker__form" onSubmit={handleSaveSubmit}>
            <textarea className="Sticker__text" name="text" defaultValue={props.text}></textarea>
            <p className="Sticker__id">{props.stickerId}</p> {/*le digo que el id del sticker será una propiedad del sticker que se llamara stickerId*/}

            <button className="Button">Save</button>
        </form>
    </div>
}      

export default Sticker


