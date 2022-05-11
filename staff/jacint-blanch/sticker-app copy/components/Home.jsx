class Home extends React.Component {
    state = {name: null, notes: null}

    handleLogoutClick = () => {
        delete sessionStorage.username

        this.props.onUserLoggedOut()
    }

    componentDidMount() {
        retrieveUser(sessionStorage.username, (error, user) => {
            if (error) {
                alert(error.message)

                return
            }

            this.setState({ name: user.name})
        })
    }
    
    render() {
        return <div className="Home Container">
            <header className="Home__header Container Container--row Container--spread-sides">
                <button className="Button Button--no-border Home__home">📋</button>
                <div>
                    <button className="Button Button--no-border Home__profile">{this.state.name}</button>
                    <button className="Button Button--no-border Home__logout" onClick={this.handleLogoutClick}>Logout</button>
                </div>
            </header>

            <main className="Home__body Container"></main>
                {
                    this.state.notes && <ul>
                        {this.state.notes.map(note => <li><Sticker text={note.text}/></li>)}
                    </ul>
                }

            <footer className="Home__footer Container">
                <button className="Home__addSticker">+</button>
            </footer>
        </div>
    }
}