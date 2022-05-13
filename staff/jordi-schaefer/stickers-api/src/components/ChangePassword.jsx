function ChangePassword () {

    const handleSaveClick = event => {
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

    return <div className="ChangePassword">
        <form className="Container" onSubmit={handleSaveClick}>
            <input className="form" type="password" name="password" placeholder=" Current password"/>
            <input className="form" type="password" name="newPassword" placeholder=" New password"/>
            <input className="form" type="password" name="newPasswordRepeat" placeholder=" Repeat new password"/>

            <button className="Button">Save</button>
        </form>
    </div>
}