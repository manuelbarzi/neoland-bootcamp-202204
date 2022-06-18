import { useState, useEffect, useContext } from 'react'
import Logger from 'vendor/Loggy'
import Context from './Context'
import retrieveEvent from '../logic/retrieveEvent'
import EventHome from './EventHome'
import './HomeEventList.sass'

function HomeEventList({ timestamp }) {
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

            setEvents(events)//estes event si el botón de salvar y cancelar, solamente el titulo la descripción y un botón de participar
        })

    // const handleRemoveEvent = eventId => {
    //     const _events = events.filter(event => event.id !== eventId)

    //     setEvents(_events)
    //     handleFeedback({ level: 'success', message: 'event has been removed' })
    // }

    logger.info('render')

    return events && events.length ?
        <ul className="EventList__list Container">
            {events.map(event => <li key={event.id}>
                <EventHome eventId={event.id} title={event.title} description={event.description} name={event.ownerEvent.name} />
            </li>)}
        </ul>
        :
        <p>no event yet</p>
}

export default HomeEventList
