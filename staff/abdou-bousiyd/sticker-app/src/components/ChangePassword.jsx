const { Component } = React

class ChangePassword extends Component {

    state = {error: null, alert: null}

    handleSubmit = event => {
        event.preventDefault()
        const password = event.target.password.value
        const newPassword = event.target.newPassword.value
        const newPasswordRepeat = event.target.newPasswordRepeat.value

        updateUserPassword(sessionStorage.token, password, newPassword, newPasswordRepeat, error => {
            if (error) {
                this.setState({ alert : <Alert error message={error.message} />})
                setTimeout( () => {
                    this.setState({alert: null})
                }, 4000 )
                return
            }
            this.setState({ alert : <Alert message='Password saved' />})
            setTimeout( () => {
                this.setState({alert: null})
            }, 4000 )
        })
    }

    render() {

        const {state: {alert}} = this


        return <div className="ChangePassword">
            {alert && alert}
            <form className="Container" onSubmit={this.handleSubmit}>
                <input className="Input Input--light" type="password" name="password" placeholder="current password" />

                <input className="Input Input--light" type="password" name="newPassword" placeholder="new password" />
                <input className="Input Input--light" type="password" name="newPasswordRepeat" placeholder="repeat new password" />

                <button className="Button Button--light">Save</button>
            </form>
        </div>
    }
}