import { useContext } from 'react'
import Logger from 'vendor/Loggy'
import Context from './Context'
import deleteEvent from '../logic/deleteEvent'
import saveEvent from '../logic/saveEvent'
import './EventHome.sass'
import { useNavigate } from 'react-router-dom'

function EventHome(props) {
    const logger = new Logger('Event')
    logger.info('call')

    const { handleFeedback } = useContext(Context)
    const navigate = useNavigate()
    const { eventId, onRemove } = props

    // const handleRemoveClick = () => {
    //     if (eventId)
    //         deleteEvent(sessionStorage.token, eventId, error => {
    //             if (error) {
    //                 handleFeedback({ level: 'error', message: error.message })

    //                 return
    //             }

    //             onRemove(eventId)
    //         })
    // }

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
            navigate('/')

            handleFeedback({ level: 'success', message: 'event saved' })
        })
    }

    logger.info('render')

    return <div className="Event-home">
        <form className="Event__home-form" onSubmit={handleSaveSubmit}>


            <h1 className='Event__home-title'>Name: {props.name}</h1>
            <h1 className='Event__home-title'>Title: {props.title}</h1>
            <p className='Event__home-description'>Description: {props.description}</p>

            {/* <button className="button-event" onClick={handleRemoveClick}Apuntarme</button>
            <button className="button-event">Save</button> */}

        </form>
    </div>
}

export default EventHome



{/* <select name='select'>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
</select> */}

{/* <figure className=''>
                <img src="hola" alt="" />
            </figure> */}
