const {useContext} = React

function ChangePassword() {
    const logger = new Logger('ChangePassword')

    logger.info('call')

    const { handleFeedback } = useContext(Context)

    const handleSubmit = event => {
        event.preventDefault()

        const password = event.target.password.value
        const newPassword = event.target.newPassword.value
        const newPasswordRepeat = event.target.newPasswordRepeat.value

        try {
            updateUserPassword(sessionStorage.token, password, newPassword, newPasswordRepeat, error => {
                if (error) {
                    handleFeedback({level: 'error', message: message.error})
    
                    return
                }
    
                handleFeedback({level: 'success', message: 'new password has been changed'})
            })
        } catch(error) {
            handleFeedback({ level: 'error', message: error.message })
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


/*function ChangePassword() {

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
}*/


