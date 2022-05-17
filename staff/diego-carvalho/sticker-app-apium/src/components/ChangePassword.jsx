function ChangePassword() {

    const logger = new Logger('ChangePassword ')

    logger.info('call')


    const handleFormSubmit = event => {
        event.preventDefault()

        const password = event.target.password.value
        const newPassword = event.target.newPassword.value
        const newPasswordRepeat = event.target.newPasswordRepeat.value

        updateUserPassword(sessionStorage.token, password, newPassword, newPasswordRepeat, error => {
            if (error) {
                alert(error.message)

                return
            }

            alert('The password has been changed.')
        })
    }


    logger.info('render')

    return <div className="ChangePassword">
        <form className="Container" onSubmit={handleFormSubmit}>

            <input type="password" name="password" placeholder="current password" />
            <input type="password" name="newPassword" placeholder="new password" />
            <input type="password" name="newPasswordRepeat" placeholder="repeat new password" />

            <button>Save</button>
        </form>
    </div>
}


