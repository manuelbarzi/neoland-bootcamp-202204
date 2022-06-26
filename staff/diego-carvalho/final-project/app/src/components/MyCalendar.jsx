import { useState, useEffect, useContext } from 'react'
import Logger from 'vendor/Loggy'
import Context from './Context'
import retrieveOwnerEvent from '../logic/retrieveOwnerEvent'
import Event from './Event'
import './MyCalendar.sass'
import RetrieveTargetedEvent from './RetrieveTargetedEvent'
import { useNavigate, Routes, Route } from 'react-router-dom'

function MyCalendar({ timestamp }) {
  const logger = new Logger('MyCalendar')

  logger.info('call')

  const [events, setEvents] = useState(null)
  const { handleFeedback } = useContext(Context)
  const navigate = useNavigate()


  useEffect(() => {
    logger.info('componentDidMount | componentWillReceiveProps')

    loadEvents()
  }, [timestamp])

  const loadEvents = () =>
    retrieveOwnerEvent(sessionStorage.token, (error, events) => {
      if (error) {
        handleFeedback({ level: 'error', message: error.message })

        return
      }

      setEvents(events)
    })

  const handleRemoveEvent = eventId => {
    const _events = events.filter(event => event.id !== eventId)

    setEvents(_events)
  }

  const handleEventTargetedClick = () => {

    navigate('retrieveTargetedEvent')
  }

  logger.info('render')

  return <div>
    <div className='myCalendar__container' >
      <div className='myCalendar__button-container'>
        <button className='myCalendar__eventTargeted-button' onClick={handleEventTargetedClick}>Eventos Apuntados</button>
      </div>
      <Routes>
        <Route index element={events && events.length ?

          <ul className="myCalendar__list">
            {events.map(event => <li key={event.id}>
              <Event eventId={event.id} title={event.title} description={event.description} location={event.location} eventDate={event.eventDate} onRemove={handleRemoveEvent} />
            </li>)}
          </ul>
          :
          <p className='myCalendar__p' >no event yet</p>} />
        <Route path="retrieveTargetedEvent" element={<RetrieveTargetedEvent />} />
      </Routes>
    </div>
  </div>



}

export default MyCalendar