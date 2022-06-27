import { useState, useContext } from 'react'
import Logger from 'vendor/Loggy'
import Context from './Context'
import saveEvent from '../logic/saveEvent'
import { isJwtValid } from 'validators'
import './EventCreator.sass'
import { useNavigate } from 'react-router-dom'
import { MdOutlineLocationOn, MdCalendarToday } from "react-icons/md"

function EventCreator() {
  const logger = new Logger('Home')

  logger.info('call')

  const { handleFeedback } = useContext(Context)
  const navigate = useNavigate()

  const handleSaveSubmit = event => {
    event.preventDefault()

    const { target: { title: { value: title } } } = event
    const { target: { description: { value: description } } } = event
    const { target: { location: { value: location } } } = event
    const { target: { eventDate: { value: eventDate } } } = event


    saveEvent(sessionStorage.token, null, title, description, location, eventDate, error => {
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
        <h1 className='Description__pag'>Crear Evento</h1>

        <h4>Nombre del evento</h4>
        <textarea className='EventCreator__title' type='text' name="title" placeholder="¿Que nombre quieres que tenga el evento?"></textarea>

        <h4>Descripción</h4>
        <textarea className='EventCreator__description' type='text' name="description" placeholder="Describe tu evento" />

        <MdOutlineLocationOn className="icons EventCreator__icon" />
        <textarea className='EventCreator__Input' type="text" name='location' placeholder='Añade la ubicación del evento' />

        <MdCalendarToday className="icons EventCreator__icon" />
        <textarea className='EventCreator__Input' type="text" name='eventDate' placeholder='Indica la fecha y hora del evento' />
        {/* 
        <select className='EventCreator__categories' name='category'>
          <option value="category1">Actividad deportiva</option>
          <option value="category2">Actividad social</option>
          <option value="category3">Medio Ambiente</option>
        </select> */}

        <button className="EventCreator__button">Save</button>

      </form>

    </div> : <></>
}

export default EventCreator



