//const Component = React.Component
const { Component } = React // descomponetizamos Component de React.Component

// creo una clase App que extiende de React.Component (como todos)
class App extends Component {
    constructor(props) { // props es un objeto que le paso todas las propiedades que quiera 
        super(props)   // props tambien se ha de poner aqui

        this.state = { result: null, a: null, b: null } // declaramos los estados de la App (propiedades)
    }

    
    // creamos una funcion que en caso de escribir algo en la casilla, guardamos el valor del target en el estado a de la app
    handleChangeA = function(event) {this.setState({ a: Number(event.target.value) })}.bind(this)
    handleChangeB = event => this.setState({ b: Number(event.target.value) })


    
    handleAdd = () => {  // creamos una funcion que llamamos cuando se clicla el boton
        //const res = this.state.a + this.state.b
        const { a, b } = this.state         // sacamos las propiedades a y b del estado de app, descomponetizando
        const res = a + b   // sumamos
        
        this.setState({ result: res })  // cambiamos la propiedad result del estado
    }
    handleSub = () => {
        const a = this.state.a
        const b = this.state.b
        const res = a - b

        this.setState({ result: res })
    }
    handleMulti = () => {  
        const { a, b } = this.state        
        this.setState({ result: a*b }) 
    }
    handleDiv = () => {  
        const { a, b } = this.state        
        this.setState({ result: a/b }) 
    }
    handleRes = () => {      
        this.setState({ result: null }) 
    }



    // render es el encargado de pintar el html
    render() {
        return <div className="App">
            <h1 className="App__title">{this.props.titulo}</h1>


            <input className="App__input" type="number" name="a" onChange={this.handleChangeA} />

            <div className="button__App">
                <button className="btn1" onClick={this.handleAdd}>➕</button>
                <button className="btn1" onClick={this.handleSub}>➖</button>
                <button className="btn1" onClick={this.handleMulti}>✖</button>
                <button className="btn1" onClick={this.handleDiv}>➗</button>
            </div>

            <input className="App__input" type="number" name="b" onChange={this.handleChangeB} />


            <div>
                <button className="button__Clear" onClick={this.handleRes}>clear</button>
            </div>


            <h2 className="igual">=</h2>

            {/* si el estado de result es diferente a null y el otro es "algo/true" ejecuta la segunda condicion */}
            {/* ejecutamos la class result, enviadole la propiedad value, que es el estado result de la app, a traves de props */}
            {this.state.result !== null && <Result value={this.state.result} />}
            
            {/* 
            if (this.state.result !== null) {
                <Result value={this.state.result} />
            } 
            */}

        </div>
    }
}