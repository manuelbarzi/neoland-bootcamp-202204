//const Component = React.Component
const { Component } = React

class App extends Component {
    constructor() {
        super()

        this.state = { result: null, a: null, b: null }
    }

    handleChangeA = event => this.setState({ a: Number(event.target.value) })

    handleChangeB = event => this.setState({ b: Number(event.target.value) })

    handleAdd = () => {
        //const res = this.state.a + this.state.b
        const { a, b } = this.state
        const res = a + b

        this.setState({ result: res })
    }

    handleSub = () => {
        const { a, b } = this.state
        const res = a - b

        this.setState({ result: res })
    }

    render() {
        return <div className="App">
            <h1 className="App__title">hola mundo</h1>
            
            <input type="number" name="a" onChange={this.handleChangeA} />

            <button onClick={this.handleAdd}>+</button>
            <button onClick={this.handleSub}>-</button>

            <input type="number" name="b" onChange={this.handleChangeB}/>

            =
            {/* <span>{this.state.result}</span> */}
            {this.state.result !== null && <span>{this.state.result}</span>}
        </div>
    }
}