import { useState, useEffect, useContext } from 'react'
import Logger from 'vendor/Loggy'
import Context from './Context'
import './MyCalendar.sass'
import retrieveTargetedEvent from '../logic/retrieveTargetedEvent'
import EventTargeted from './EventTargeted'

function RetrieveTargetedEvent({ timestamp }) {
  const logger = new Logger('RetrieveTargetedEvent')

  logger.info('call')

  const [events, setEvents] = useState(null)
  const { handleFeedback } = useContext(Context)

  useEffect(() => {
    logger.info('componentDidMount | componentWillReceiveProps')
    loadEvents()
  }, [timestamp])

  const loadEvents = () =>
    retrieveTargetedEvent(sessionStorage.token, (error, events) => {
      if (error) {
        handleFeedback({ level: 'error', message: error.message })

        return
      }
      setEvents(events)
    })

  const handleRemoveEventTargeted = eventId => {
    const _events = events.filter(event => event.id !== eventId)

    setEvents(_events)
  }

  logger.info('render')

  return events && events.length ?
    <ul className="EventList__list Container">
      {events.map(event => <li key={event._id}>
        <EventTargeted eventId={event._id} title={event.title} description={event.description} onRemove={handleRemoveEventTargeted} />
      </li>)}
    </ul>
    :
    <p>no event yet</p>
}

export default RetrieveTargetedEvent