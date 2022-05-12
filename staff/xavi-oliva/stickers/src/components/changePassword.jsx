function ChangePassword(prop) {
    const logger = new Logger('ChangePassword')

    logger.info('call')

    const handleFormSubmit = event => {
        event.preventDefault()

        const password = event.target.password.value
        const newPassword = event.target.newPassword.value
        const newPasswordRepeat = event.target.newPasswordRepeat.value

        updateUserPassword(props.username, password, newPassword, newPasswordRepeat, error => {
            if (error) {
                alert(error.message)

                return
            }

            alert('Password saved')

            onUserPasswordChanged()
        })
    }

    logger.info('render')

    return <div className="ChangePassword Profile--form">
        <form className="Container" onSubmit={handleFormSubmit}>
            <input className="Input Input--light" type="password" name="password" placeholder="current password" />

            <input className="Input Input--light" type="password" name="newPassword" placeholder="new password" />
            <input className="Input Input--light" type="password" name="newPasswordRepeat" placeholder="repeat new password" />

            <button className="Button">Save</button>
        </form>
    </div>
}