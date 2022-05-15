const {Component} = React

class ChangeName extends Component {

    state = {error: null, alert: null}

    handleFormSubmit = e => {
        e.preventDefault()

        const name = e.target.name.value

        updateUserName(sessionStorage.token, name, (error) => {
            if (error) {
                this.setState({ alert : <Alert error message={error.message} />})
                setTimeout( () => {
                    this.setState({alert: null})
                }, 4000 )
                return
            }
            this.setState({ alert : <Alert message="Name updated" />})
            setTimeout( () => {
                this.setState({alert: null})
            }, 4000 )
            this.props.handleRetriveUser()
        });
    }

    render() {

        const {state: {alert}} = this

        return <div className="ChangeName">
            {alert && alert}
            <form className="Container"  onSubmit={this.handleFormSubmit}>
                <input type="text" name="name" placeholder='name'/>
                <button>Save</button>
            </form>
        </div>
    }
}

