const { useContext } = React

function ChangeName (props) {

    const { handleFeedback } = useContext(Context)

    const handleSaveClick = event => {
        event.preventDefault()

        const newName = event.target.name.value

        try {
            updateUserName(sessionStorage.token, newName, (error) => {
                if (error) {
                    handleFeedback({ type: 'error', message: error.message})
                    return
                }

                handleFeedback({ type: 'success', message: 'Name changed'})
                props.onUserNameChanged()
            })
        } catch(error) {
            handleFeedback({ type: 'error', message: error.message})
        }
    }


    return <div className="ChangeName">
        <form className="Container" onSubmit={handleSaveClick}>
            <input className="form" type="text" name="name" placeholder=" New name"/>
            <button className="Button">Save</button>
        </form>
    </div>
}