//const Component = React.Component
const { Component } = React

class App extends Component {
    constructor() {
        super()

        this.state = { result: null }
    }

    handleSubmit = function(event) {
        event.preventDefault()

        const a = Number(event.target.a.value)
        const b = Number(event.target.b.value)

        const res = a + b

        //this.state.result = res NO!
        this.setState({ result: res })
    }.bind(this)

    render() {
        return <div className="App">
            <h1 className="App__title">hola mundo</h1>
            <form onSubmit={this.handleSubmit}>
                <input type="number" name="a" />
                <input type="number" name="b" />
                <button>Add</button>
                {/* <span>{this.state.result}</span> */}
                {this.state.result !== null && <span>{this.state.result}</span>}
            </form>
        </div>
    }
}