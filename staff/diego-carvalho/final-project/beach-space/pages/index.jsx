import { useState, useEffect, useContext } from 'react'
import Context from '../components/Context'
import retrieveEvent from '../logic/retrieveEvent'


export default function Home() {

  const [events, setEvents] = useState(null)
  const { handleFeedback } = useContext(Context)

  useEffect(() => {


    loadEvents()
  }, [])

  const loadEvents = () => {
    const token = sessionStorage.token

    if (!token) return

    retrieveEvent(token, (error, events) => {
      if (error) {
        handleFeedback({ level: 'error', message: error.message })

        return
      }

      setEvents(events)
    })
  }

  return events && events.length ?
    <ul className="EventList__list Container">
      {events.map(event => <li key={event.id}>
        <Event event={event} title={event.title} description={event.description} />
      </li>)}
    </ul>
    :
    <p>no event yet</p>

}
