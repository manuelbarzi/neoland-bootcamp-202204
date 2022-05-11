const { Component } = React

class ChangeName extends Component {

    handleFormSubmit = event => {
        event.preventDefault()

        const newName = event.target.name.value
    
            updateUserName(sessionStorage.username, newName, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }
    
                alert('Name changed')
                
            })

    }


    render(){
        return <div className="ChangeName">
            <form className="Container" onSubmit = {this.handleFormSubmit}>
                <input type="text" name="name" placeholder="name"/>
                <input type="text" name="newName" placeholder="enter the new name"/>
                <button>Save</button>
            </form>
        </div>
    }
}

