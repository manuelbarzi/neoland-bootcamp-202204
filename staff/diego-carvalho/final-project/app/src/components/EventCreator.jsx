import { useState, useContext } from 'react'
import Logger from 'vendor/Loggy'
import Context from './Context'
import saveEvent from '../logic/saveEvent'
import { isJwtValid } from 'validators'
import './EventCreator.sass'
import { useNavigate } from 'react-router-dom'

function EventCreator() {
  const logger = new Logger('Home')

  logger.info('call')

  // const [timestamp, setTimestamp] = useState(null)
  // const [view, setView] = useState(null)
  const { handleFeedback } = useContext(Context)
  const navigate = useNavigate()

  const handleSaveSubmit = event => {
    event.preventDefault()

    const { target: { title: { value: title } } } = event
    const { target: { text: { value: description } } } = event

    saveEvent(sessionStorage.token, null, title, description, error => {
      if (error) {
        handleFeedback({ level: 'error', message: error.message })

        return
      }
      handleFeedback({ level: 'success', message: 'event saved' })
      navigate('/')


    })
  }

  logger.info('render')

  return isJwtValid(sessionStorage.token) ?

    <div className="EventCreator">
      <form className="EventCreator__form" onSubmit={handleSaveSubmit}>

        <textarea className='EventCreator__title' type='text' name="title" placeholder="Title"></textarea>
        <textarea className='EventCreator__description' type='text' name="text" placeholder="Write your description"></textarea>

        <button className="EventCreator__button">Save</button>

      </form>

    </div> : <></>
}

export default EventCreator



