
function push(){
    
    array=arguments[0] //
    for(let i=0; i<arguments.length-1; i++) // recore el array mientras que la array sea la ultima posicion 
        array[array.length]=arguments[i+1]  // 

    return array.length // Devuelve la array con el elemento al final 
}