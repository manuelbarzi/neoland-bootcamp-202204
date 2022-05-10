const { Component } = React

class ChangeName extends Component {
    render() {
        return <div className="ChangeName">
            <form className="Container">
                <input className="Input Input--light" type="text" name="name" placeholder="name" />
                <button className="Button Button--light">Save</button>
            </form>
        </div>
    }
}