/* 
recibimos un array y una función callback
iteramos el callback a cada valor dentro del array
y retornamos



*/

function some(array, callback){
    for (let i = 0; i < array.length; i++){
        // si la función se cumple para esa posición del Array retorno true
        if(callback(array[i])){
            return true
        }
    }
    return false
}


// vers semantica

function some(array, callback){
    for (let i = 0; i < array.length; i++){
        
        const element = array[i]

        const matches = callback(element)
        if (matches) return true
    }
    return false
}
