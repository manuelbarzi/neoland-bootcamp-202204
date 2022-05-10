const {Component} = React

class ChangeName extends Component {
    state = {name: null}
    
    handleFormSubmit = event => {
        event.preventDefault()
        
        const newName = event.target.name.value

        updateUserName(sessionStorage.username, newName, error => {
            if(error){
                alert(error.message)

                return
            }

            alert('New name saved!')

        })
    }

    handleSaveNewNameClick = () => {
        retrieveUser(sessionStorage.username, (error, user) =>{
            if(error) {
                alert(error)

                return
            }
            this.setState({name: user.name})
        })

    }

    render() {
        return<div className="ChangeName">
            <form className="Container" onSubmit={this.handleFormSubmit}>
                <input type="text" name="name" placeholder="name" />
                <button onClick={this.handleSaveNewNameClick}>Save</button>
            </form>
        </div>
    }
}




















/*function ChangeName() {
    Component.call(this, `<div class="ChangeName">
        <form class="Container">

            <input type="text" name="name" placeholder="Name">
            <input type="text" name="newName" placeholder="New name">

            <button>Save</button>
        </form>
    </div>`)

    this.container.querySelector('form').addEventListener('submit', event => {
        event.preventDefault()

        const name = event.target.name.value
        const newName = event.target.newName.value

        updateUserName(sessionStorage.username, name, newName, error => {
            if (error) {
                alert(error.message)

                return
            }

            alert('New name saved!')
        })
    })
}

chainPrototypes(Component, ChangeName) */