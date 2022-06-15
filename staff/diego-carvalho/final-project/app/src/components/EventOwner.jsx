import { useState, useEffect, useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from './Context'
import retrieveUser from '../logic/retrieveUser'
import saveEvent from '../logic/saveEvent'
import EventList from './EventList'
import { isJwtValid } from '../validators'
import './Home.sass'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { MdAddCircle } from "react-icons/md"


function EventOwner() {
    const logger = new Logger('Home')

    logger.info('call')

    const [timestamp, setTimestamp] = useState(null)
    const [view, setView] = useState(null)
    const { handleFeedback } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        logger.info('componentDidMount')

        if (isJwtValid(sessionStorage.token))
            retrieveUser(sessionStorage.token, (error) => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })

                    return
                }

                setView('list')
            })
        else navigate('/login')
    }, [])

    const handleAddClick = () => {
        saveEvent(sessionStorage.token, null, null, null, error => {
            if (error) {
                handleFeedback({ level: 'error', message: error.message })

                return
            }

            setTimestamp(Date.now())
        })
    }

    logger.info('render')

    return isJwtValid(sessionStorage.token) ?

        <div className="EventOwner Container">

            {view === 'list' && <EventList timestamp={timestamp} />}

            <div className='EventOwner__button Container'>
                <a href="#" onClick={handleAddClick}><MdAddCircle className="EventOwner__button" /></a>
            </div>

        </div> : <></>
}

export default EventOwner



