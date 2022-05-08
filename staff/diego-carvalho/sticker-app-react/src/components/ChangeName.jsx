const {Component} = React

class ChangeName extends Component {
    render() {
        return<div className="ChangeName">
            <form className="Container">
                <input type="text" name="name" placeholder="name" />
                <button>Save</button>
            </form>
        </div>
    }
}