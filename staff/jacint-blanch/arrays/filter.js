function filter(array, callback){
    let filtered = []

    for(let i = 0; i <= array.length; i++){
        // const total = array[i]
        if (callback(array[i])) {  

            filtered[filtered.length] = array[i]
        }
    }

    return filtered
}