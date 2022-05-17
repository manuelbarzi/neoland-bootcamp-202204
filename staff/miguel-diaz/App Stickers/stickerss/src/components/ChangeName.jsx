import {useContext} from 'react'
import Logger from '../vendor/loggy'
import Context from './Context'
import updateUserName from '../logic/updateUserName'

function ChangeName (){

    const logger = new Logger('ChangeName')

    logger.info('call')

    const {handleFeedback} = useContext(Context)
 

    const handleNameChangeClick = event => {
        event.preventDefault()

        const name = event.target.name.value
        try {
            updateUserName(sessionStorage.token, name, (error) => {

                if (error) {
                    handleFeedback({level: 'error', message: error.message})

                    return 
                }

                handleFeedback({ level: 'success', message: 'Name saved'})
            })
        } catch(error) {
            handleFeedback({level: 'error', message: error.message})
        }
        
    }


    logger.info('render')

    return <div className="ChangeName">
            <form className="Container" onSubmit={handleNameChangeClick}>
                <input class="namebutton" type="text" name="name" placeholder="name"/>
                <button className="btn">Save</button>
            </form>
        </div>
}

export default ChangeName
