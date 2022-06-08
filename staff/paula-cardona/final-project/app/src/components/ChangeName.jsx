import { useContext } from 'react'
import Context from './Context'
import Logger from '../vendor/Loggy'
import updateUserName from '../logic/updateUserName'



function ChangeName (props){

    const logger = new Logger ('change name')
    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const handleFormSubmit = event => {
        event.preventDefault()

        const newName = event.target.name.value
    
            try{
                updateUserName(sessionStorage.token, newName, (error) => {
                    if (error) {
                        alert(error.message)
                        return
                    }
        
                    
                    handleFeedback({ level: 'success', message: 'Name Changed!' })
                    
                })
            }catch(error) {
                handleFeedback({ level: 'error', message: error.message })
            }

    }


    logger.info('render')
    return <div className="ChangeName Container">
        <form className="Container" onSubmit = {handleFormSubmit}>
            <input type="text" name="name" placeholder="enter the new name"/>
            <button>Save</button>
        </form>
    </div>
    
}  
export default ChangeName
