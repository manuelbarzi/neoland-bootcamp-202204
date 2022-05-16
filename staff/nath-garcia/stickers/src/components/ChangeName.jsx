import { Component } from 'react'

class ChangeName extends Component {
    render() {
        return <div className="ChangeName">
        <form className="Container" onSubmit={this.handleSaveClick}>
            <input className="form" type="text" name="name" placeholder=" New name"/>
            <button className="Button">Save</button>
        </form>
    </div>
    }
}

export default ChangeName