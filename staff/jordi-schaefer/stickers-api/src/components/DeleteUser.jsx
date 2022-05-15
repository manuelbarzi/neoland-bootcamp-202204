const { useContext } = React

function DeleteUser () {

    const [view, setView] = useState('delete')
    const [password, setPassword] = useState(null)
    const { handleFeedback } = useContext(Context)


    const handleDeleteClick = (event) => {
        event.preventDefault()
        setPassword(event.target.elemento.value)

        setView('confirm')
    }


    const handleConfirmClick = () => {
        try {
            deleteUser(sessionStorage.token, password, (error) => {
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
        setPassword(null)
        setView('delete')
    }


    return <div className="DeleteUser">
        {view === 'delete' && <form className="Container" onSubmit={handleDeleteClick}>
            <input className="form" type="password" name="elemento" placeholder=" Confirm your password"/>
            <button className="Button">Delete</button>
        </form> }

        {view === 'confirm' && <div className="Container">
            <p className="Confirm__message">Are you sure you want to delete your user and stickers permanetly?</p>
            <button className="Button" onClick={handleConfirmClick}>Delete</button>
        </div> }
    </div>
}