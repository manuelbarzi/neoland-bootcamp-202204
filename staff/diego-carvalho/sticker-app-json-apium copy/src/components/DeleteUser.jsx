const { useContext } = React

function DeleteUser() {
    const logger = new Logger('DeleteUser')

    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const handleFormSubmit = event => {
        event.preventDefault()

        const password = event.target.password.value

        try {
            deleteUser(sessionStorage.token, password, error => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })

                    return
                }
            })

        } catch (error) {
            handleFeedback({ level: 'error', message: error.message })
        }
    }
    
   /* handleDeleteUserButtonClick = () => {
        delete sessionStorage.token
        location.reload()

    }*/

    logger.info('render')

    return <div className="DeleteUser">
        <form className="Container" onSubmit={handleFormSubmit}>
            <input className="" type="password" name="password" placeholder="password" />

            <button className="Delete__button" onClick={handleDeleteUserButtonClick}>Delete User</button>
        </form>
    </div>
}


//INFO

/*The try statement lets you test a block of code for errors. The catch statement lets you handle the error. 
The throw statement lets you create custom errors.
The final statement lets you execute code, after try and catch, regardless of the result.*/


