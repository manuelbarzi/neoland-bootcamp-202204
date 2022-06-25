import { useContext } from 'react'
import Logger from 'vendor/Loggy'
import Context from './Context'
import deleteTargetedEvent from '../logic/deleteTargetedEvent'
import './Event.sass'

function EventTargeted(props) {
  const logger = new Logger('EventTargeted')
  logger.info('call')

  const { handleFeedback } = useContext(Context)

  const { eventId, onRemove } = props

  const handleRemoveClick = () => {
    if (eventId)
      deleteTargetedEvent(sessionStorage.token, eventId, error => {
        if (error) {
          handleFeedback({ level: 'error', message: error.message })

          return
        }

        onRemove(eventId)
        handleFeedback({ level: 'success', message: 'event has been removed' })
      })
  }

  logger.info('render')

  return <div className='Event'>
    <form className="Event__form">

      <h1 className='Event__title'>{props.title}</h1>
      <h1 className="Event__description">{props.description}</h1>

      <div className='Event__button-container'>
        <button className="Event__event-button" onClick={handleRemoveClick}>cancelar</button>
      </div>

    </form>
  </div>
}

export default EventTargeted