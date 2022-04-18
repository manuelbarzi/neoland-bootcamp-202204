/* 
recibimos un array y una función callback
iteramos el callback a cada valor dentro del array
y retornamos



*/

function some(array, callback){
    for (let i = 0; i < array.length; i++){
        if(callback(array[i])){
            return true
        }
    }
    return false
}