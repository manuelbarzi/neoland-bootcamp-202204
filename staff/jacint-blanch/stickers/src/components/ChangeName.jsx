const { Component } = React

class Profile extends Component {

    handleChangeNameSubmit = event => {
        event.preventDefault()

    }
    render() {
            return <div class="ChangeName">
            <form class="Container" onSubmit={this.handleChangeNameSubmit}>
                <input type="text" name="name" placeholder="name">
                <button>Save</button>
            </form>
        </div>
    }
    
}