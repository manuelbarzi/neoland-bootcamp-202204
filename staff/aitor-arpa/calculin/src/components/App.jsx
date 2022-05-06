const { Component } = React

class App extends Component {   /* <---- Constructor y Padre  */
state = { history: '', display: 0 }
    constructor(props) {
        super(props)

        this.state = { result: null, a: null, b: null }
    }


    handlerChangeA = event => this.setState({ a: Number(event.target.value) })  /* <---  Recogemos el Valor de a por el evento 
 */
    handlerChangeB = event => this.setState({ output: Number(event.target.value) })     /*  <---  Recogemos el Valor de a por el evento  */
    handlerNum1 = event => this.setState({ uno: Number(event.target.value) }) 
    handlerNum2 = event => this.setState({ dos: Number(event.target.value) }) 
    handlerNum3 = event => this.setState({ tres: Number(event.target.value) }) 
    handlerNum4 = event => this.setState({ cuatro: Number(event.target.value) }) 
    handlerNum5 = event => this.setState({ cinco: Number(event.target.value) }) 
    handlerNum6 = event => this.setState({ seis: Number(event.target.value) }) 
    handlerNum7 = event => this.setState({ siete: Number(event.target.value) })
    handlerNum8 = event => this.setState({ ocho: Number(event.target.value) })  
    handlerNum9 = event => this.setState({ nueve: Number(event.target.value) })         
    handlerNum0 = event => this.setState({ cero: Number(event.target.value) }) 
    
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

    handleButtonClick = event => {
        const key = event.target.innerText

        if (key !== '=')
            this.setState({ history: this.state.history + key })
        else
            this.setState({ display: eval(this.state.history) })
    }


render() {  /* <<<< ----- PINTADO / RENDERIZA ---- >>>> */
    return <div className="App">
        <h1 className="App__title">{this.props.salute}</h1>

        <input type="number" name="a" className="selecNum" onChange={this.handlerChangeOut} />
            <div className="calcone">

                <button onClick={this.handleAdd} >➕</button>
                <button onClick={this.handlerSub}>➖</button>
                <button onClick={this.handlerDiv}>➗</button>
                <button onClick={this.handlerMul}>✖</button>
            </div>
                
                <input type="number" name="b" className="selecNum" onChange={this.handlerChangeB} />

                
                {this.state.result !== null && <Result value={this.state.result}  />}

                   {/*   <   ------ Intento de Calculadora a base de clicks ----   > */}
                <div className="Calc_Btn">

                <input type='text' name="output" className="output" onChange={this.handlerChangeOut}/>
                <button onClick={this.handleButtonClick} name='uno' className="btnNum, calc" value='1'>1</button>
                <button onClick={this.handleButtonClick} name='dos' className="btnNum, calc" value={2}>2</button>
                <button onClick={this.handleButtonClick} name='tres' className="btnNum, calc" value={3}>3</button>
                <button onClick={this.handleButtonClick} >➕</button>
                <button onClick={this.handleButtonClick} name='cuatro' className="btnNum, calc" value={4}>4</button>
                <button onClick={this.handleButtonClick} name='cinco' className="btnNum, calc" value={5}>5</button>
                <button onClick={this.handleButtonClick} name='seis' className="btnNum, calc" value={6}>6</button>
                <button onClick={this.handleButtonClick}>➖</button>
                <button onClick={this.handleButtonClick} name='siete' className="btnNum, calc" value={7}>7</button>
                <button onClick={this.handleButtonClick} name='ocho' className="btnNum, calc" value={8}>8</button>
                <button onClick={this.handleButtonClick} name='nueve' className="btnNum, calc" value='9'>9</button>
                <button onClick={this.handleButtonClick}>➗</button>
                <button onClick={this.handleButtonClick} name='clear' className="btnNum, calc, span-two">C</button>
                <button onClick={this.handleButtonClick} name='cero' className="btnNum, calc" value='0'>0</button>
                <button onClick={this.handleButtonClick}>✖</button>
       </div>

       </div>
      
    }
}