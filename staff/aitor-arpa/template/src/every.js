// declaro variable para indicar que es verdadero 
// recoro todo el array para verificar que todos los elementos son iguales
// si el elemento introducido por el usuario es diferente al que contiene el array modificare la variable y devolvera falso

function every(array, callback) {
    let everyAreEquals = true
    for(let i = 0; i < array.length; i++) {
        const element = array[i]
        const result = callback(element)
        if (result === false) return everyAreEquals = false
    }
 
 return everyAreEquals
}
