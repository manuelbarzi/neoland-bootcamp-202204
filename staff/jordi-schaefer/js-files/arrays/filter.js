
function filter(array, callback){
    const new_array = []
    let n=0
    for (let i = 0; i < array.length; i++){
        if (callback(array[i])){   // si se cumple la condicion del callback
            new_array[n]=array[i] // lo paso al  nuevo array
            n++
        }
    }
    return new_array
}