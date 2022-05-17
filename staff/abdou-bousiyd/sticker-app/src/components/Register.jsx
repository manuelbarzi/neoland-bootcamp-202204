const { useState } = React

function Register(props) {

    const [alert, setAlert] = useState(null)


    const handleFormSubmit = e => {
        e.preventDefault()

        const name = e.target.name.value
        const username = e.target.username.value
        const password = e.target.password.value
        
        registerUser(name, username, password, error => {
            if (error) {
                setAlert(<Alert error message={error.message} />)
                setTimeout( () => {
                    setAlert(null)
                }, 4000 )
                return
            }

            props.onUserLoggedOut()
        })
    }

    const handleLoginLinkClick = e => {
        e.preventDefault()

        props.onUserLoggedOut()

    }

    return <div>
        <form className="Container" onSubmit={handleFormSubmit}>
            {alert && alert}
            <input className="Input Input--light" type="text" name="name" placeholder="name" />
            <input className="Input Input--light" type="text" name="username" placeholder="username" />
            <input className="Input Input--light" type="password" name="password" placeholder="password" />
            <button className="Button Button--light">Register</button>
            <a href="#" onClick={handleLoginLinkClick}>Login</a>
        </form>
    </div>

    // onUserRegistered(callback) {
    //     const form = this.container.querySelector('form')

    //     form.addEventListener('submit', function (event) {
    //         event.preventDefault()

    //         const name = form.name.value
    //         const username = form.username.value
    //         const password = form.password.value

    //         //callback(name, username, password)

    //     })
    // }

    // onLoginClick(callback) {
    //     const anchor = this.container.querySelector('a')

    //     anchor.addEventListener('click', function (event) {
    //         event.preventDefault()

    //         callback()
    //     })
    // }
}