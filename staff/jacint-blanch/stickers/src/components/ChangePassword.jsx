const { Component } = React

class Profile extends Component {

    handleChangePasswordSubmit = event => {
        event.preventDefault()

    }
    render() {
            return <div>
            <form className="Container" onSubmit={this.handleChangePasswordSubmit}>
                <input type="text" name="name" placeholder="name" />
                <button>Save</button>
            </form>
        </div>
    }
    
}