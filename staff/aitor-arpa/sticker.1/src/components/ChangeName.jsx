const { Component } = React

class ChangeName extends Component {
    state = this.setState({ view: 'ChangeName' })


    handelChangeName = event => {
        event.preventDefault()

        const name = event.target.name.value

        updateUserName(sessionStorage.username, name, error => {
            if (error) {
                alert(error.message)

                return
            }
            alert('Name Update')
            home.setName(newName)
        })
    }

render() {
    return <div className="ChangeName">
        <form className="Container" onSubmit={this.handelChangeName}>
            <input type="text" name="name" placeholder="New Name" />
            <button>Save</button>
        </form>
    </div>

}}






/*   this.container.querySelector ('form').addEventListener('submit', event => {
           event.preventDefault()

           const newName =event.target.name.value

           updateUserName(sessionStorage.username,name, error =>{
               if (error){
                   alert(error.message)
                   
                   return
               }
               alert('Name Update')
               home.setName(newName) */
