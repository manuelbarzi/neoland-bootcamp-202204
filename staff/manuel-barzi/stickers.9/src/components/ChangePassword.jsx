function ChangePassword() {
    const logger = new Logger('ChangePassword')

    logger.info('call')

    const handleSubmit = event => {
        event.preventDefault()

        const password = event.target.password.value
        const newPassword = event.target.newPassword.value
        const newPasswordRepeat = event.target.newPasswordRepeat.value

        try {
            updateUserPassword(sessionStorage.token, password, newPassword, newPasswordRepeat, error => {
                if (error) {
                    alert(error.message)
    
                    return
                }
    
                alert('Password saved')
            })
        } catch(error) {
            alert(error.message)
        }
    }

    logger.info('render')

    return <div className="ChangePassword">
        <form className="Container" onSubmit={handleSubmit}>
            <input className="Input Input--light" type="password" name="password" placeholder="current password" />

            <input className="Input Input--light" type="password" name="newPassword" placeholder="new password" />
            <input className="Input Input--light" type="password" name="newPasswordRepeat" placeholder="repeat new password" />

            <button className="Button Button--light">Save</button>
        </form>
    </div>
}