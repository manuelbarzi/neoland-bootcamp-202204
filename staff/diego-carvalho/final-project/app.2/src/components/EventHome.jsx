import { useContext } from 'react'
import Logger from 'vendor/Loggy'
import Context from './Context'
import signUpToEvent from '../logic/signUpToEvent'
import saveEvent from '../logic/saveEvent'
import './EventHome.sass'
import { useNavigate } from 'react-router-dom'

function EventHome(props) {
    const logger = new Logger('Event')
    logger.info('call')

    const [events, setEvents] = useState(null)
    const { handleFeedback } = useContext(Context)
    const navigate = useNavigate()
    const { eventId } = props

    const handleSignUpToEventClick = () => {
        if (eventId)
            signUpToEvent(sessionStorage.token, eventId, error => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })

                    return
                }

                setUsers(events)
            })
    }

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

    return <div>
        <form className="EventHome__form" onSubmit={handleSaveSubmit}>

            <h1 className='EventHome__name'>Name: {props.name}</h1>
            <h1 className='EventHome__title'>Title: {props.title}</h1>
            <p className='EventHome__description'>Description: {props.description}</p>

            <button className="Button--light" onClick={handleSignUpToEventClick}>Apuntarme</button>


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
