//const Component = React.Component //para no poner react abajo, crea una variable que se llamará Component con el resultado de React.Component
const { Component } = React //descomponetizamos

class App extends Component{ //crea un componente de react. React.Component{. Creo una clase App que extienda de React.Component(como todos)
    constructor (props){     //recibe un objeto que le paso todas las propiedades que quiera
        super(props)        //también se tiene que poner aquí

        this.state = { result: null, a: null, b: null } //crea propiedades de la App(propiedades). las inicializamos con null. el resultado serán los valores del input a i b

    }

    handleChangeA = function(event){this.setState({ a: Number(event.target.value) })}.bind(this) //creamos una funcion en caso de escribir algo en la casilla que guardará el valor del target del estado de a
    handleChangeB = event => this.setState({ b: Number(event.target.value)}) //=

    //en ninguna de las operaciones no pintamos aun en result
    handleAdd = () => {    //creamos una función que llamamos cuando se clica el botón
        const { a, b } = this.state   //sacamos a y b del estado, como react.component, descomponetizando
        const res = a + b              //sumamos

        this.setState ({ result:res }) //cambiamos la propiedad result del estado 
    }
    handleSub = () => {    //creamos una función que llamamos cuando se clica el botón
        const { a, b } = this.state   //sacamos a y b del estado, como react.component, descomponetizando
        const res = a - b              //restamos

        this.setState ({ result:res }) //cambiamos la propiedad result del estado 
    }
    handleMulti = () => {    //creamos una función que llamamos cuando se clica el botón
        const { a, b } = this.state   //sacamos a y b del estado, como react.component, descomponetizando
        const res = a*b              //multiplicamos

        this.setState ({ result:res }) //cambiamos la propiedad result del estado 
    }
    handleDiv = () => {    //creamos una función que llamamos cuando se clica el botón
        const { a, b } = this.state   //sacamos a y b del estado, como react.component, descomponetizando
        this.setState ({ result : a/b }) //cambiamos la propiedad result del estado 
    }
    handleClear = () =>{
        this.setState ({ result : null })
    }

    render() {//encargado de pintar el html
        return <div className="App">
            <h1 className="App__title"> {this.props.salute}</h1>
            <input type="number" name="a" onChange={this.handleChangeA}/> {/*para cualquier nuevo presion en el teclado la esta espiando en el onChange*/}
            
            <div className="button__App">
                <button onClick={this.handleAdd}>+</button>  {/*el click dispara el handle*/}
                <button onClick={this.handleSub}>-</button>
                <button onClick={this.handleMulti}>*</button>
                <button onClick={this.handleDiv}>/</button>
            </div>
            <div> 
                <button onClick={this.handleClear}>Clear</button>
            </div>
           
            <input type="number" name="b" onChange={this.handleChangeB}/>

            <h2>=</h2>

            {/*si el estado de result es diferente a null y el otro es algo/true, ejecuta la segunda condición*/}
            {this.state.result !== null && <Result value={this.state.result}/>} {/*ejecutamos la class result (objeto nuevo), enviandole la propiedad value, que es el estado result de la app, a través de props*/}
            {/*if (this.state.result !== null){
                <Result value={this.state.result*/}
        </div>
    }
}

