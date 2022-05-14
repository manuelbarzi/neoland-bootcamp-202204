const { useContext } = React

function DeleteUser () {

    const { handleFeedback } = useContext(Context)

    const handleDeleteClick = (event) => {
        event.preventDefault()

        const confirmation = event.target.elemento.value

        try {
            deleteUser(sessionStorage.token, confirmation, (error) => {
                if (error) {
                    handleFeedback({ type: 'error', message: error.message})
                    return
                }

                handleFeedback({ type: 'success', message: 'User deleted'})
                delete sessionStorage.token
                location.reload()
            })
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }


    return <div className="DeleteUser">
        <form className="Container" onSubmit={handleDeleteClick}>
            <input className="form" type="password" name="elemento" placeholder=" Confirm your password"/>
            <button className="Button">Delete</button>
        </form>
    </div>
}