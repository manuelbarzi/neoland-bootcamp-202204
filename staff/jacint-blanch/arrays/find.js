
function find(array, callback){
    
    for(let i = 0; i <= array.length; i++){
        // if(array[i] >= callback){
        //     return array[i]
        // }
   
        if (callback(array[i])) {
            return array[i]
        }
    }
}
