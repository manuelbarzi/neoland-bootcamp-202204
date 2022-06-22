import { useContext } from 'react'
import Logger from 'vendor/Loggy'
import Context from './Context'
import signUpToEvent from '../logic/signUpToEvent'
import './EventHome.sass'

function EventHome(props) {
  const logger = new Logger('Event')
  logger.info('call')

  const { handleFeedback } = useContext(Context)
  const { event } = props

  const handleSignUpToEventClick = () => {
    if (event.id)

      signUpToEvent(sessionStorage.token, event.id, error => {
        if (error) {
          handleFeedback({ level: 'error', message: error.message })

          return
        }
        handleFeedback({ level: 'success', message: 'Apuntado' })
        props.onSignUp()

      })
  }

  logger.info('render')

  return <div>
    <div className="EventHome__form">

      <h1 className='EventHome__name'>Name: {event.name}</h1>
      <h1 className='EventHome__title'>Title: {event.title}</h1>
      <p className='EventHome__description'>Description: {event.description}</p>
      <h1 className='EventHome__title'>Participants: {event.participants.length}</h1>

      <button className="Button--light" onClick={handleSignUpToEventClick}>Apuntarme</button>
    </div>
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
