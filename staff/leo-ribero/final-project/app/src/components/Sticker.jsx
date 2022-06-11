import { useContext } from 'react'
import Logger from 'loggy'
import Context from './Context'
import deleteSpot from '../logic/deleteSpot'
import saveSpot from '../logic/saveSpot'
import './Sticker.sass'

function Sticker(props) {
    const logger = new Logger('Sticker')

    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const handleRemoveClick = () => {
        const { stickerId, onRemove } = props

        if (stickerId)
            deleteSpot(sessionStorage.token, stickerId, error => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })

                    return
                }

                onRemove(stickerId)
            })
    }

    const handleSaveSubmit = event => {
        event.preventDefault()

        const { target: { text: { value: text } } } = event
        const { stickerId } = props

        saveSpot(sessionStorage.token, stickerId, text, error => {
            if (error) {
                handleFeedback({ level: 'error', message: error.message })

                return
            }

            handleFeedback({ level: 'success', message: 'Sticker saved' })
        })
    }

    logger.info('render')

    return <div className="Sticker">
        <button className="Button" onClick={handleRemoveClick}>x</button>

        <form className="Sticker__form" onSubmit={handleSaveSubmit}>
            <textarea className="Sticker__text" name="text" defaultValue={props.text}></textarea>
            <p className="Sticker__id">{props.stickerId}</p>

            <button className="Button">Save</button>
        </form>
    </div>
}

export default Sticker