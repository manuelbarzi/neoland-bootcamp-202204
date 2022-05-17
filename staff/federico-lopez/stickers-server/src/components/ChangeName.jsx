const { useContext } = React

function ChangeName(props) {
    const { handleFeedback } = useContext(Context)

    const handleFormSubmit = event => {
        event.preventDefault()

        const newName = event.target.newName.value
    
        try {
            updateName(sessionStorage.token, props.name, newName, (error) => {
                if (error)
                    handleFeedback(error.message)

                handleFeedback('your name was successfully changed', 'succeed')

                props.onChangedName()

                props.onChangedNameHome(newName)
            })
        } catch (error) {
            handleFeedback(error.message)
        }
    }

    return <div className="ChangeName">
        <form className="Profile__form" onSubmit={handleFormSubmit}>
            <h2>Change Name</h2>
            <input type="text" name="newName" id="newName" placeholder="newName" />
            <button type="submit" className="SubmitButton button button__light">Save</button>
        </form>
    </div>
}