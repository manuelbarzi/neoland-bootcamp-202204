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

        const { target: {title: { value: title} } } = event
        const { target: { text: { value: description} } } = event
        const { eventId } = props

        saveEvent(sessionStorage.token, eventId, title, description, error => {
            if (error) {
                handleFeedback({ level: 'error', message: error.message })

                return
            }

            handleFeedback({ level: 'success', message: 'Event saved' })
        })
    }

    logger.info('render')

    return <div className="Event">
        <button className="Button" onClick={handleRemoveClick}>x</button>

        <form className="Event__form" onSubmit={handleSaveSubmit}>
            <h1 className='Event__title' name="title" defaultValue={props.title}></h1>
            <textarea className="Event__text" name="text" defaultValue={props.description}></textarea>
            <p className="Event__id">{props.EventId}</p>

            <button className="Button">Save</button>
        </form>
    </div>
}

export default Event




