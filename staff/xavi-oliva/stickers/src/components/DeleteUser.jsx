function DeleteUser(props) {
    const logger = new Logger('DeleteUser')

    logger.info('call')

    const handleFormSubmit = event => {
        event.preventDefault()

        const confirmation = event.target.element.value

        deleteUser(sessionStorage.token, confirmation, (error) => {
            if (error) {
                alert(error.message)
                return
            }

            alert('User deleted')

            delete sessionStorage.token

            location.reload()
        })
    }

    logger.info('render')

    return <div className="DeleteUser Profile--form">
        <form className="Container" onSubmit={handleFormSubmit}>
            <input className="Input Input--light" type="password" name="element" placeholder="Confirm password" />
            <button className="Button">Delete User</button>
        </form>
    </div>
}