function ChangePassword(props) {

    const handleOnFormSubmit = event => {
        event.preventDefault()

        const password = event.target.password.value
        const newPassword = event.target.newPassword.value
            
        updatePassword(sessionStorage.token, password, newPassword, (error) => {
            if (error) 
                alert(error.message)
        })
        
        props.onChangedPassword()
    }
    
    return <div className="ChangePassword">
        <form className="Profile__form" onSubmit={handleOnFormSubmit}>
            <h2>Change Password</h2>
            <input type="password" name="password" id="password" placeholder="password" />
            <input type="password" name="newPassword" id="newPassword" placeholder="newPassword" />
            <button type="submit" className="SubmitButton button button__light">Save</button>
        </form>
    </div>
}