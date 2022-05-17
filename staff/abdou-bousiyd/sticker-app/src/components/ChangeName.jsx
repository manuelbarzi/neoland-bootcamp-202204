const { useState } = React

function ChangeName(props) {
    // state = {error: null, alert: null}
    const [alert, setAlert] = useState(null)

    const handleFormSubmit = e => {
        e.preventDefault()

        const name = e.target.name.value

        updateUserName(sessionStorage.token, name, (error) => {
            if (error) {
                setAlert(<Alert error message={error.message} />)
                setTimeout( () => {
                    setAlert(null)
                }, 4000 )
                return
            }
            setAlert( <Alert message="Name updated" />)
            setTimeout( () => {
                setAlert(null)
            }, 4000 )
            props.handleRetriveUser()
        });
    }


    return <div className="ChangeName">
        {alert && alert}
        <form className="Container"  onSubmit={handleFormSubmit}>
            <input type="text" name="name" placeholder='name'/>
            <button>Save</button>
        </form>
    </div>
}

