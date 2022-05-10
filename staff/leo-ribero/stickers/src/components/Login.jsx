const { Component } = React

class Login extends Component {
    handleForSubmit = event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        authenticateUser(username, password, error => {
            if (error) {
                alert(error.message)

                return
            }

            sessionStorage.username = username

            //callback()
            this.props.onUserLoggedIn()
        })

    }

    handleRegisterLinkClick = event => {
        event.preventDefault()

        this.props.onRegisterLinkClicked()
        //cuando navegamos hacia registro
    }

    render() {
        return <div>
            <form className="Container" onSubmit={this.handleForSubmit}>
                <input class="Input Input--light" type="text" name="username" placeholder="username"/>
                <input class="Input Input--light" type="password" name="password" placeholder="password"/>
                <button class="Button Button--light">Login</button>
                <a href="#" onCLick={this.handleRegisterLinkClick}>Register</a>
            </form>
        </div>
    }



    // onRegisterClick(callback) {
    //     const anchor = this.container.querySelector('a')

    //     anchor.addEventListener('click', function (event) {
    //         event.preventDefault()

    //         callback()
    //     })
    // }
    // todo esto lo ha quitado en el momento en el que ha mecanicado handleLinkClick para navegar hacia registro
}