import { useState, useEffect, useContext } from 'react'
import Logger from 'vendor/Loggy'
import Context from './Context'
import retrieveEvent from '../logic/retrieveEvent'
import EventHome from './EventHome'
import './HomeEventList.sass'

function HomeEventList(timestamp) {

  const logger = new Logger('EventList')

  logger.info('call')

  const [events, setEvents] = useState(null)
  const { handleFeedback } = useContext(Context)
  const [reload, setReload] = useState(null)

  useEffect(() => {
    logger.info('componentDidMount | componentWillReceiveProps')

    loadEvents()
  }, [reload])

  const loadEvents = () =>
    retrieveEvent(sessionStorage.token, (error, _events) => {
      if (error) {
        handleFeedback({ level: 'error', message: error.message })

        return
      }
      setEvents(_events)
    })

  const handleSignUpToEventClick = () => {
    console.log(timestamp)
    setReload(reload + [timestamp])
  }

  logger.info('render')

  return events && events.length ?
    <ul className="EventList__list Container">
      {events.map(event => <li key={event.id}>
        <EventHome event={event} onSignUp={handleSignUpToEventClick} />
      </li>)}
    </ul>
    :
    <p>no event yet</p>
}

export default HomeEventList
