import { useContext } from 'react'
import Logger from 'vendor/Loggy'
import Context from './Context'
import deleteEvent from '../logic/deleteEvent'
import saveEvent from '../logic/saveEvent'
import './Event.sass'
import { useNavigate } from 'react-router-dom'

function Event(props) {
  const logger = new Logger('Event')
  logger.info('call')

  const { handleFeedback } = useContext(Context)
  const navigate = useNavigate()
  const { eventId, onRemove } = props

  const handleRemoveClick = () => {
    if (eventId)
      deleteEvent(sessionStorage.token, eventId, error => {
        if (error) {
          handleFeedback({ level: 'error', message: error.message })

          return
        }

        onRemove(eventId)
        handleFeedback({ level: 'success', message: 'event has been removed' })

      })
  }

  const handleSaveSubmit = event => {
    event.preventDefault()

    const { eventId } = props
    const { target: { title: { value: title } } } = event
    const { target: { text: { value: description } } } = event
    const { target: { location: { value: location } } } = event
    const { target: { eventDate: { value: eventDate } } } = event

    saveEvent(sessionStorage.token, eventId, title, description, location, eventDate, error => {
      if (error) {
        handleFeedback({ level: 'error', message: error.message })

        return
      }
      navigate('/')

    })
  }

  logger.info('render')

  return <div className='Event'>
    <form className="Event__form" onSubmit={handleSaveSubmit}>

      <textarea className='Event__title' type='text' name="title" placeholder="Titulo" defaultValue={props.title}></textarea>
      <textarea className="Event__description" type='text' name="text" placeholder="Descripción" defaultValue={props.description}></textarea>
      <textarea className="Event__location" type='text' name="location" placeholder="Localización" defaultValue={props.location}></textarea>
      <textarea className="Event__date" type='text' name="eventDate" placeholder="Fecha" defaultValue={props.eventDate}></textarea>

      <div className='Event__button-container'>
        <button className="Event__event-button" onClick={handleRemoveClick}>cancelar</button>
        <button className="Event__event-button">Save</button>
      </div>


    </form>
  </div>
}

export default Event



{/* <select name='select'>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
</select> */}

{/* <figure className=''>
                <img src="hola" alt="" />
            </figure> */}
