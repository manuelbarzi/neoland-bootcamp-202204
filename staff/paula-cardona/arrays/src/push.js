function push() {
    let array = arguments[0]
    for (let i = 0; i < arguments.length-1; i++){
        array[array.length] = arguments[i+1]

    }
    return array.length
} 
/*arguments.length-1 significa que empieza por el ultimo,
arguments [i+1] querrá decir que empezamos a añadir en el 
último + 1 porque sino lo remplaza.*/