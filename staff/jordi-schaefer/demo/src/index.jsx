// creamos una variable root donde nos "conectamos" al html
const root = document.querySelector('#root')

// añadimos clase App a root
// ReactDOM.render(<App/>, root)
ReactDOM.render(<App titulo="Calculadora"/>, root)
// le pasamos la variable salute a la App