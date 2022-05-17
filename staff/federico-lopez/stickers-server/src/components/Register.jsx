const { useContext } = React

function Register(props) {
    const { handleFeedback } = useContext(Context)

    const handleFormSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const username = event.target.username.value
        const password = event.target.password.value
        
        try {
            registerUser(name, username, password, error => {
                if (error) {
                    handleFeedback(error.message)

                    return
                }
                handleFeedback('the registration process succeded', 'succeed')
                
                props.onRegistered()
            })
        } catch(error) {
            handleFeedback(error.message)
        }
    }

    const onLoginClick = event => {
        event.preventDefault()

        props.onLoginNavigation()
    }

    return <div className="LoginAndRegister">
        <form className="form" onSubmit={handleFormSubmit}>
            <input className="input" type="text" name="name" placeholder="name" />
            <input className="input" type="text" name="username" placeholder="username" />
            <input className="input" type="password" name="password" placeholder="password" />
            <button className="button">Register</button>
            <a className="button button__light" href="#" onClick={onLoginClick}>Login</a>
        </form>
    </div>
}