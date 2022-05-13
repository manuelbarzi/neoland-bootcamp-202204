const { Component } = React

class ChangeName extends Component {



    handelChangeName = event => {
        event.preventDefault()

        const newName = event.target.newName.value

        updateUserName(sessionStorage.token, newName, error => {
            if (error) {
                alert(error.message)

                return
            }
            alert('Name Update')

        })
    }


render() {
    return <div className="ChangeName">
        <form className="Container" onSubmit={this.handelChangeName}>
            <input type="text" name="newName" placeholder="New Name" />
            <button>Save</button>
        </form>
    </div>
}}