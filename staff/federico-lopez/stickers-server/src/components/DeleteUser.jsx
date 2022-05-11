const { Component } = React

class DeleteUser extends Component {
    handleFormSubmit = event => {
        event.preventDefault()
    
        deleteUserFun(this.props.username, (error) => {
            if (error) 
                alert(error.message)
        })

        delete sessionStorage.username
        this.props.onDeletedUser()
    }

    render() {
        return <div className="DeleteUser">
        <form className="Profile__form" onSubmit={this.handleFormSubmit}>
            <h2>Delete User</h2>
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit" className="SubmitButton button button__light">Save</button>
        </form>
    </div>
    }
}