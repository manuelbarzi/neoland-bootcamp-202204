import { useState, useEffect, useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import retrieveEvent from '../logic/retrieveEvent'
import Event from './Event'
import './EventList.sass'

function EventList({ timestamp }) {
    const logger = new Logger('EventList')

    logger.info('call')

    const [events, setEvents] = useState(null)
    const { handleFeedback } = useContext(Context)

    useEffect(() => {
        logger.info('componentDidMount | componentWillReceiveProps')

        loadEvents()
    }, [timestamp])

    const loadEvents = () =>
        retrieveEvent(sessionStorage.token, (error, events) => {
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

    logger.info('render')

    return events && events.length ?
        <ul className="EventList__list Container">
            {events.map(event => <li key={event.id}>
                <Event eventId={event.id} description={event.description} onRemove={handleRemoveEvent} />
            </li>)}
        </ul>
        :
        <p>no event yet</p>
}

export default EventList
