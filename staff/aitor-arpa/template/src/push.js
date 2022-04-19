
function push(){
    
    array=arguments[0] //
    for(let i=0; i<arguments.length; i++) // recore el array mientras que la array sea la ultima posicion 
        array[array.length]=arguments[i+1]  // 

    return array.length // Devuelve la array con el elemento al final 
}


// array [array.length] = element tambien funciona solo para cuando es un elemento