import { useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import deleteEvent from '../logic/deleteEvent'
import saveEvent from '../logic/saveEvent'
import './Event.sass'

function Event(props) {
    const logger = new Logger('Event')

    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const handleRemoveClick = () => {
        const { eventId, onRemove } = props

        if (eventId)
            deleteEvent(sessionStorage.token, eventId, error => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })

                    return
                }

                onRemove(eventId)
            })
    }

    const handleSaveSubmit = event => {
        event.preventDefault()

        const { eventId } = props
        const { target: { title: { value: title } } } = event
        const { target: { text: { value: description } } } = event

        saveEvent(sessionStorage.token, eventId, title, description, error => {
            if (error) {
                handleFeedback({ level: 'error', message: error.message })

                return
            }

            handleFeedback({ level: 'success', message: 'event saved' })
        })
    }

    logger.info('render')

    return <div className="Event">


        <form className="Event__form" onSubmit={handleSaveSubmit}>

            <button className="Button__close" onClick={handleRemoveClick}>x</button>
            <textarea className='Input Input--light Event--title' type='text' name="title" placeholder="Title" defaultValue={props.title}></textarea>
            <textarea className="Input Input--light Event--description" type='text' name="text" placeholder="Description" defaultValue={props.description}></textarea>

            <button className="Button__save">Save</button>
        </form>
    </div>
}

export default Event




