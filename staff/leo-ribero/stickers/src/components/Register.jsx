// ver apuntes notion Friday 6 May
const { Component } = React

class Register extends Component {

    handleFormSubmit = event => {
        event.preventDefault()

        // const name = form.name.value
        // const username = form.username.value
        // const password = form.password.value
        const name = event.target.name.value
        const username = event.target.username.value
        const password = event.target.password.value

        registerUser(name, username, password, error => {
            if (error) {
                alert(error.message)

                return
            }

            // callback()
            this.props.onUserRegistered()
        })
    }

    render() {
        return <div>
            <form className="Container" onSubmit>{this.handleFormSubmit}>
                <input className="Input Input--light" type="text" name="name" placeholder="name" />
                <input className="Input Input--light" type="text" name="username" placeholder="username" />
                <input className="Input Input--light" type="password" name="password" placeholder="password" />
                <button className="Button Button--light">Register</button>
                <a href="#">Login</a>
            </form>
        </div>
    }



    onLoginClick(callback) {
        const anchor = this.container.querySelector('a')

        anchor.addEventListener('click', function (event) {
            event.preventDefault()

            callback()
        })
    }
}