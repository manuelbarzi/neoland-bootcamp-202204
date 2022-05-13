const {Component} = React

class ChangeName extends Component {

    handleFormSubmit = e => {
        e.preventDefault()

        const name = e.target.name.value

        updateUserName(sessionStorage.token, name, (error) => {
            if (error) return alert(error.message);

            this.props.handleRetriveUser()
        });
    }

    render() {
        return <div className="ChangeName">
            <form className="Container"  onSubmit='name'>
                <input type="text" name="name" placeholder={this.name}/>
                <button>Save</button>
            </form>
        </div>
    }
}

