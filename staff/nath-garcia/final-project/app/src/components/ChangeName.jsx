import { useContext } from 'react'
import Context from './Context'
import updateUserName from '../logic/updateUserName'
import './ChangesButtons.sass'
import Logger from '../vendor/Loggy'
import { isJwtValid } from '../validators'

function ChangeName(props) {

    const logger = new Logger('change name')
    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const handleFormSubmit = event => {
        event.preventDefault()

        const newName = event.target.name.value;
        (async () => {
            try {
                await updateUserName(sessionStorage.token, newName)

                handleFeedback({ level: 'success', message: 'name changed' })
                props.onProfileChanged()

            } catch (error) {
                handleFeedback({ level: 'error', message: error.message })
            }
        })();
    }

    const handleBackClick = () => {
        props.onBackClick()
    }

    logger.info('render')
    return <div>
        <div className="Box--back">
            <button className="Button Link Button-back" type="button" onClick={handleBackClick}>Back</button>
        </div>
        <form className="Container" onSubmit={handleFormSubmit}>
            <input type="text" name="name" placeholder="New Name and surname" />
            <button className="Button Button--light" type='submit'>Save</button>
        </form>
    </div>
}

export default ChangeName