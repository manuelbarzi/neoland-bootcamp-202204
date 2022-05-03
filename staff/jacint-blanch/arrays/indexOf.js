function indexOf(array, searchElement, start = 0){
    for(let i = start; i < array.length; i++){
        if(array[i]  === searchElement) return i
    }return -1
}