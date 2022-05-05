function at(array, index) {
    if(index >=0){
        return array[index]
    } else {
        return array[array.length + index]
    }
}

// TODO Function hecha por Manu ('REVISAR!!!!') at1.js y at2.js
/*function at(array, index) {
    if (index < 0)
        index = array.length + index
    
    const element = array[index]

    return element
}*/