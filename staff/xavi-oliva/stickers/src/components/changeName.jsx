import { useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from '../components/Context'
import updateUserName from '../logic/updateUserName'


function ChangeName(props) {
    const logger = new Logger('ChangeName')

    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const handleFormSubmit = event => {
        event.preventDefault()

        const newName = event.target.name.value

        try {
            updateUserName(sessionStorage.token, newName, (error) => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })
    
                    return
                }
            })
    
            handleFeedback({ level: 'error', message: 'Name saved'})
            
            props.onUserNameChanged()            
        } catch (error) {
            handleFeedback({ level: 'error', message: error.message })
        }
    }

    logger.info('render')

    return <div className="ChangeName Profile--form">
        <form className="Container" onSubmit={handleFormSubmit}>
            <input className="Input Input--light" type="text" name="name" placeholder="name" />
            <button className="Button">Save</button>
        </form>
    </div>

}

export default ChangeName