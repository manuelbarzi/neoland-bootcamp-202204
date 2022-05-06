//const Component = React.Component
const { Component } = React

class App extends Component {
    constructor(props) {
        super(props)
    //state es add x remove y    
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
        const { a, b } = this.state
        const res = a / b

        this.setState({ result: res })
    }

    handlePerc = () => {
        const { a, b } = this.state
        const res = (a * b) / 100

        this.setState({ result: res })
    }
    
    //visual donde si ver los botones,los inputs y los resultados
    render() {
        return <div className="App">
            <h1 className="App__title">{this.props.salute}</h1>
          
        {/*onChange dispara un evento () / handleChange captura */}
            <input type="number" name="a" onChange={this.handleChangeA} />

            <button onClick={this.handleAdd}>+</button>
            <button onClick={this.handleSub}>-</button>
            <button onClick={this.handleMult}>*</button>
            <button onClick={this.handleDiv}>/</button>
            <button onClick={this.handlePerc}>%</button>


            <input type="number" name="b" onChange={this.handleChangeB} />

            =
            {this.state.result !== null && <Result value={this.state.result} />}
        </div>
    }
}
{/*What is the difference between state and props?
props (short for “properties”) and state are both plain JavaScript objects. While both hold
information that influences the output of render, they are different in one important way: 
props get passed to the component (similar to function parameters)
 whereas state is managed within the component (similar to variables declared within a function). */}