const { Component } = React

class ChangeName extends Component {

    handleFormSubmit = event => {
        event.preventDefault()
    
        const newName = event.target.newName.value
            
        updateName(this.props.username, newName, (error) => {
            if (error) 
                alert(error.message)
            })        
        
        this.props.onChangedName()
    }

    render() {
        return <div className="ChangeName">
        <form className="Profile__form" onSubmit={this.handleFormSubmit}>
            <h2>Change Name</h2>
            <input type="text" name="newName" id="newName" placeholder="newName" />
            <button type="submit" className="SubmitButton button button__light">Save</button>
        </form>
    </div>
    }
}