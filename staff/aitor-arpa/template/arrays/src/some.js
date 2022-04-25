function some (array, callback) {
    for (let i= 0;i< array.length; i++) {
        
        const element = array[i]

        const result = callback(element)

        if(result) return true

    }

    return false
}


/* 
-itera el array
- recore todos los elementos del array 
- si el elemento encontradoo cumple con la condicion devolvera true
- si no lo encuentra devolvera false
 */