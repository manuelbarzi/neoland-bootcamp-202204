const { Component } = React

class App extends Component {
    constructor (props) {
        super(props)

        this.state = { result: null, a: null, b: null }
    }

    handleChargeA = event => this.setState({ a: Number(event.target.value) })

    handleChargeB = event => this.setState({ b: Number(event.target.value) })

    handleAdd = () => {
        const { a, b } = this.state
        const res = a+b
        

        this.setState({ result: res})
    }

    handleSub = () => {
        const { a, b } = this.state
        const res = a-b
        

        this.setState({ result: res})
    }

    handleMult = () => {
        const { a, b } = this.state
        const res = a*b
        

        this.setState({ result: res})
    }

    handleDivide = () => {
        const { a, b } = this.state
        const res = a/b
        

        this.setState({ result: res})
    }

    handleSqrt = () => {
        const { a, b } = this.state
        const res = Math.sqrt(a, b)
        

        this.setState({ result: res})
    }



    
    render() {
        return <div className = "App">
            <h1 className = "App__title">{this.props.salute}</h1>

            <input type="number" name = "a" onChange={this.handleChargeA} />
            <input type="number" name = "b" onChange={this.handleChargeB} />

            <button onClick={this.handleAdd}>+</button>
            <button onClick={this.handleSub}>-</button>
            <button onClick={this.handleMult}>*</button>
            <button onClick={this.handleDivide}>/</button>
            <button onClick={this.handleDivide}>$</button>

            =
            {this.state.result !== null && <Result value = {this.state.result} />}

        </div>
    }

}