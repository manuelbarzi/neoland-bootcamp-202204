function DeleteUser () {

    const handleDeleteClick = (event) => {
        event.preventDefault()

        const confirmation = event.target.elemento.value

        try {
            deleteUser(sessionStorage.token, confirmation, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }

                alert('User deleted')
                delete sessionStorage.token
                location.reload()
            })
        } catch(error) {
            alert(error.message)
        }
    }


    return <div className="DeleteUser">
        <form className="Container" onSubmit={handleDeleteClick}>
            <input className="form" type="password" name="elemento" placeholder=" Confirm your password"/>
            <button className="Button">Delete</button>
        </form>
    </div>
}