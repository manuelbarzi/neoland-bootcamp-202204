import { useState, useEffect, useContext } from 'react'
import Logger from 'vendor/Loggy'
import Context from './Context'
import saveEvent from '../logic/saveEvent'
import { isJwtValid } from 'validators'
import './Home.sass'
import { useNavigate } from 'react-router-dom'

function EventOwner() {
    const logger = new Logger('Home')

    logger.info('call')

    const [timestamp, setTimestamp] = useState(null)
    const [view, setView] = useState(null)
    const { handleFeedback } = useContext(Context)
    const navigate = useNavigate()

    // useEffect(() => {
    //     logger.info('componentDidMount')

    //     if (isJwtValid(sessionStorage.token))
    //             setView('event')

    //     else navigate('/login')
    // }, [])

    const handleSaveSubmit = event => {
        event.preventDefault()

        const { target: { title: { value: title } } } = event
        const { target: { text: { value: description } } } = event

        saveEvent(sessionStorage.token, null, title, description, error => {
            if (error) {
                handleFeedback({ level: 'error', message: error.message })

                return
            }
            navigate('/')

            handleFeedback({ level: 'success', message: 'event saved' })
        })
    }

    logger.info('render')

    return isJwtValid(sessionStorage.token) ?

        <div className="EventOwner Container">
            <form className="Event__form" onSubmit={handleSaveSubmit}>

                <textarea className='Input Input--light Event--title' type='text' name="title" placeholder="Title"></textarea>
                <textarea className="Input Input--light Event--description" type='text' name="text" placeholder="Write your description"></textarea>

                <button className="button-event">Save</button>

            </form>

        </div> : <></>
}

export default EventOwner



