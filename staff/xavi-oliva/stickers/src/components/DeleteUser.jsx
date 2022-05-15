const { useContext } = React

function DeleteUser(props) {
    const logger = new Logger('DeleteUser')

    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const handleFormSubmit = event => {
        event.preventDefault()

        const confirmation = event.target.element.value

        try {
            deleteUser(sessionStorage.token, confirmation, (error) => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })
                    return
                }
    
                handleFeedback({ level: 'success', message: 'User deleted' })
    
                delete sessionStorage.token
    
                location.reload()
            })
        } catch (error) {
            handleFeedback({ level: 'error', message: error.message })
        }
    }

    logger.info('render')

    return <div className="DeleteUser Profile--form">
        <form className="Container" onSubmit={handleFormSubmit}>
            <input className="Input Input--light" type="password" name="element" placeholder="Confirm password" />
            <button className="Button">Delete User</button>
        </form>
    </div>
}