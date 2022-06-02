const { useContext } = React

function ChangeName() {

    handelChangeName = event => {
        event.preventDefault()

        const newName = event.target.newName.value

        updateUserName(sessionStorage.token, newName, error => {
            if (error) {
                alert(error.message)

                return
            }
            alert('Name Update')

        })
    }


    return <div className="ChangeName">
        <form className="Container" onSubmit={handelChangeName}>
            <input type="text" name="newName" placeholder="New Name" />
            <button>Save</button>
        </form>
    </div>
}