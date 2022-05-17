function DeleteUser(props) {
    const handleFormSubmit = event => {
        event.preventDefault()
    
        const password = event.target.password.value
       
        deleteUserFun(sessionStorage.token, password, (error) => {
            if (error) 
                alert(error.message)
        })

        delete sessionStorage.token
        props.onDeletedUser()
    }

    return <div className="DeleteUser">
        <form className="Profile__form" onSubmit={handleFormSubmit}>
            <h2>Delete User</h2>
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit" className="SubmitButton button button__light">Save</button>
        </form>
    </div>
}