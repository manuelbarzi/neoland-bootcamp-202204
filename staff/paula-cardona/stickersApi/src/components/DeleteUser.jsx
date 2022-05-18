function DeleteUser () {
    const logger = new Logger('deleteUser')

    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const handleDeleteUser = (event) => {
        event.preventDefault()



        const confirmation = event.target.elemento.value

        try {
            deleteUser(sessionStorage.token, confirmation, (error) => {
                if (error) {
                    handleFeedback({ level: 'error', message: error.message })
                    return
                }

                alert('User deleted')
                delete sessionStorage.token
                location.reload()
            })
        } catch(error) {
            handleFeedback({ level: 'error', message: error.message })
        }
    }

    logger.info('render')
    return <div className="DeleteUser Container">
        <form className="Container" onSubmit={handleDeleteUser} >
            <input className="form" type="password" name="elemento" placeholder=" Confirm your password"/>
            <button className="Button">Delete</button>
        </form>
    </div>
}
