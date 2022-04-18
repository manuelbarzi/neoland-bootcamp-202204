function map (array, callback){
for (let i= 0; i<array.length;i++){
    const element = array[i]
    const result = callback(element)
    return result

}
return result

}