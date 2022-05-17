function ChangeName(props) {

    const handleFormSubmit = event => {
        event.preventDefault()
    
        const newName = event.target.newName.value
            
        updateName(sessionStorage.token, newName, (error) => {
            if (error) 
                alert(error.message)
            })        
        
        props.onChangedName()

        props.onChangedNameHome(newName)
    }

    return <div className="ChangeName">
        <form className="Profile__form" onSubmit={handleFormSubmit}>
            <h2>Change Name</h2>
            <input type="text" name="newName" id="newName" placeholder="newName" />
            <button type="submit" className="SubmitButton button button__light">Save</button>
        </form>
    </div>
}