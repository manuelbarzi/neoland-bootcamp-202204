const { Component } = React

class ChangeName extends Component {

    handleSaveClick = event => {
        event.preventDefault()

        const newName = event.target.name.value

        updateUserName(sessionStorage.username, newName, (error) => {
            if (error) {
                alert(error.message)
                return
            }

            alert('Name changed')
            this.props.onUserNameChanged()
        })

    }


    render() {
        return <div className="ChangeName">
        <form className="Container" onSubmit={this.handleSaveClick}>
            <input className="form" type="text" name="name" placeholder=" New name"/>
            <button className="Button">Save</button>
        </form>
    </div>
    }
}