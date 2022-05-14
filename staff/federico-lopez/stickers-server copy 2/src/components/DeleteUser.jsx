const { Component } = React

class DeleteUser extends Component {
    handleFormSubmit = event => {
        event.preventDefault()
    
        const password = event.target.password.value
       
        deleteUserFun(sessionStorage.token, password, (error) => {
            if (error) 
                alert(error.message)
        })

        delete sessionStorage.token
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