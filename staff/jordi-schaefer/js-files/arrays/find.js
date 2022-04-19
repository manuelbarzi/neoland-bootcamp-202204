
function find(array, callback){
    for (let i = 0; i < array.length; i++)
        if (callback(array[i]))   // cuando encuentro elprimero que cumple la condicion del callback
            return array[i] // lo devueldo
}