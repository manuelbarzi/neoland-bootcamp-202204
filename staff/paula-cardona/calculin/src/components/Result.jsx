//componentes que no tienen estados no los convierto en class, como result.
//si se añaden estados, result passa a ser class(new result)


function Result(props){ //creo la función Result i recibo los resultados a través de props. (resultados de app)
    return <div className= "Result">{props.value}</div> //devuelve un div con el resultado
}