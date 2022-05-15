const { useContext } = React

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
            
            onUserNameChanged()            
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