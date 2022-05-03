function lastIndexOf(array, element, start){
    var from = array.length -1
    if(start) {
        from = from + start
    }
    for(let i = from; i >= 0; i--){
        if(array[i] === element) return i
    } return -1
}