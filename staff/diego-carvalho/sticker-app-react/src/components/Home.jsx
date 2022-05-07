const { Component } = React

class Home extends Component {

    state = {name: null, notes: null}

    handleLogoutClick = () => {
        delete sessionStorage.username

        this.props.onUserLoggedOut
    }

    //TODO load user when component mounts (RTFM componentDidMount lifecycle methods)
    componentDidMount(){
        retriverUser(sessionStorage.username, (error, user) => {
            if(error){
                alert(error.message)

                return
            }

            this.setState({name: user.name})
        })
    
        //TODO load sticker list and save them in state (then React will call render , so paint them there)
        retriveNotes(sessionStorage.username, (error, notes) =>{
            if(error){
                alert(error.message)

                return
            }
            
            this.setState({notes})
        })
    }
    
    render() {
        return <div className="Home Container">
            <header className="Home__header Container Container--row Container--spread-sides" >
                <button className="Button Button--no-border Home__home">📋</button>
                <div>
                    <button className="Button Button--no-border Home__profile">{this.state.name}</button>
                    <button className="Button Button--no-border Home__logout" onClick={this.handleLogoutClick}>Logout</button>
                </div>
            </header>
            <main className="Home__body Container">
                {
                    this.state.notes && <ul>
                        {this.state.notes.map(note => <li><Sticker text={note.text} /></li>)}
                    </ul>
                }
            </main>

            <footer className="Home__footer Container">
                <button className="Home__addSticker"></button>
            </footer>
        </div>
    }

}