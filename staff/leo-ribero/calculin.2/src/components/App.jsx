//const Component = React.Component
const { Component } = React

class App extends Component {
    constructor(props) {
        super(props)

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

    handleMult = () => {
        const { a, b } = this.state
        const res = a * b

        this.setState({ result: res })
    }

    handleDiv = () => {
        const { a, b } = this.state /* destructuring de declaración de dos variables a y b */
        const res = a / b

        this.setState({ result: res }) /* un setter es una funcion*/
    } 
    
    handlePor = () => {
        const { a, b } = this.state
        const res = (a * b) / 100

        this.setState({ result: res })
    }
    
    handleExp = () => {
        const { a, b } = this.state
        const res = a ** b

        this.setState({ result: res })
    }


    render() {
        return <div className="App">
            <h1 className="App__title">{this.props.salute}</h1>

            <input type="number" name="a" onChange={this.handleChangeA} />

            <button onClick={this.handleAdd}>+</button>
            <button onClick={this.handleSub}>-</button>
            <button onClick={this.handleMult}>*</button>
            <button onClick={this.handleDiv}>/</button>
            <button onClick={this.handlePor}>%</button>
            <button onClick={this.handleExp}>^</button>

            <input type="number" name="b" onChange={this.handleChangeB} />

            =
            {this.state.result !== null && <Result value={this.state.result} />}
           
        </div>
    }
}