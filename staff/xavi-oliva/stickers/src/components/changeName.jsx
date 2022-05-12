function ChangeName(props) {
    const logger = new Logger('ChangeName')

    logger.info('call')

    const handleFormSubmit = event => {
        event.preventDefault()

        const newName = event.target.name.value

        updateUserName(sessionStorage.token, newName, (error) => {
            if (error) {
                alert(error.message)

                return
            }
        })

        alert('Name saved')
        
        onUserNameChanged()
    }

    logger.info('render')

    return <div className="ChangeName Profile--form">
        <form className="Container" onSubmit={handleFormSubmit}>
            <input className="Input Input--light" type="text" name="name" placeholder="name" />
            <button className="Button">Save</button>
        </form>
    </div>

}