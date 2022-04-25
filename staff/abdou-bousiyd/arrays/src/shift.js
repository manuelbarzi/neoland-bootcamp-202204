function shift(array){

    if(array.length){

        const removed = array[0]
    
        for(let i = 0; i < array.length; i++) {
    
            array[i] = array[i +1] 
        }
        array.length = array.length -1
        return removed
    }

}
