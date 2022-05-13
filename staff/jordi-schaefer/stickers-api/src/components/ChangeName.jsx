function ChangeName (props) {

    const handleSaveClick = event => {
        event.preventDefault()

        const newName = event.target.name.value

        try {
            updateUserName(sessionStorage.token, newName, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }

                alert('Name changed')
                props.onUserNameChanged()
            })
        } catch(error) {
            alert(error.message)
        }
    }


    return <div className="ChangeName">
        <form className="Container" onSubmit={handleSaveClick}>
            <input className="form" type="text" name="name" placeholder=" New name"/>
            <button className="Button">Save</button>
        </form>
    </div>
}