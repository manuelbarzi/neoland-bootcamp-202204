import { useState, useEffect, useContext } from 'react'
import Logger from 'vendor/Loggy'
import Context from './Context'
import retrieveOwnerEvent from '../logic/retrieveOwnerEvent'
import Event from './Event'
import './MyCalendar.sass'

function MyCalendar({ timestamp }) {
    const logger = new Logger('MyCalendar')

    logger.info('call')

    const [events, setEvents] = useState(null)
    const { handleFeedback } = useContext(Context)

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
        handleFeedback({ level: 'success', message: 'event has been removed' })
    }

    logger.info('render')

    return events && events.length ?
        <ul className="EventList__list Container">
            {events.map(event => <li key={event.id}>
                <Event eventId={event.id} title={event.title} description={event.description} onRemove={handleRemoveEvent} />
            </li>)}
        </ul>
        :
        <p>no event yet</p>
}

export default MyCalendar