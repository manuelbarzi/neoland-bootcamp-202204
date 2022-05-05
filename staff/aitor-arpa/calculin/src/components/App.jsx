const { Component } = React

class App extends Component {   /* <---- Constructor y Padre  */
    constructor(props) {
        super(props)

        this.state = { result: null, a: null, b: null }
    }


    handlerChangeA = event => this.setState({ a: Number(event.target.value) })  /* <---  Recogemos el Valor de a por el evento 
 */
    handlerChangeB = event => this.setState({ b: Number(event.target.value) })     /*  <---  Recogemos el Valor de a por el evento  */
            /* Funciones con los operadores ( BTN ) de  Calculin */
    handleAdd = () => {

        const { a, b } = this.state
        const res = a + b

        this.setState({ result: res })
    }

    handlerSub = () => {
        const { a, b } = this.state
        const res = a - b

        this.setState({ result: res })

    }

    handlerDiv = () => {
        const { a, b } = this.state
        const res = a / b

        this.setState({ result: res })

    }

    handlerMul = () => {
        const { a, b } = this.state
        const res = a * b

        this.setState({ result: res })

    }
    handlerPor = () => {

        const { a, b } = this.state
        const res =a*100 / b
    }



render() {  /* <<<< ----- PINTADO / RENDERIZA ---- >>>> */
    return <div className="App">
        <h1 className="App__title">{this.props.salute}</h1>

        <input type="number" name="a" onChange={this.handlerChangeA} />

                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handlerSub}>-</button>
                <button onClick={this.handlerDiv}>/</button>
                <button onClick={this.handlerMul}>*</button>
                <button onClick={this.handlerPor}>put</button>
                <input type="number" name="b" onChange={this.handlerChangeB} />

                =
                {this.state.result !== null && <Result value={this.state.result} />}
       </div>
    }
}