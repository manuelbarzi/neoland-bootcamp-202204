const {Component} = React

class ChangeName extends Component {

    handleFormSubmit = e => {
        e.preventDefault()

        const name = e.target.name.value

        updateUserName(sessionStorage.token, name, (error) => {
            if (error) {
                alert(error.message);

                return;
            }
            alert("Name saved");
        });
    }

    render() {
        return <div className="ChangeName" onSubmit={this.handleFormSubmit}>
            <form className="Container">
                <input type="text" name="name" placeholder="name" />
                <button>Save</button>
            </form>
        </div>
    }
}

