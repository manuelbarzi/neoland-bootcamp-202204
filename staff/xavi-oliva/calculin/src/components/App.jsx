//const Component = React.Component
const { Component } = React     

class App extends Component { //declaramos que App será Componente de React
    constructor(props) {
        super(props)

        this.state = { result: null, a: null, b: null }
    }

    handleChangeA = event => this.setState({ a: Number(event.target.value) })

    handleChangeB = event => this.setState({ b: Number(event.target.value) })

    handleAdd = () => {
        // const res = this.state.a + this.state.b
        const { a, b } = this.state
        const res = a + b

        this.setState({ result: res })
    }

    handleSub = () => {
        const { a, b } = this.state
        const res = a - b

        this.setState({ result: res })
    }

    handleMul = () => {
        const { a, b } = this.state
        const res = a * b

        this.setState({ result: res })
    }

    handleDiv = () => {
        const { a, b } = this.state
        const res = a / b

        this.setState({ result: res })
    }

    render() {
        return <div className="App">
            <h1 className="App__title">{this.props.salute}</h1>

            <input type="number" name="a" onChange={this.handleChangeA} />

            <div className="App App--row">
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleSub}>-</button>
                <button onClick={this.handleMul}>x</button>
                <button onClick={this.handleDiv}>/</button>
            </div>


            <input type="number" name="b" onChange={this.handleChangeB} />

            =
            {this.state.result !== null && <Result value={this.state.result} />}

            {/* la linea 61 es lo mismo que decir:
            if(this.state.result !== null)
                <Result value={this.state.result} />
            */}
        </div>
    }
}
