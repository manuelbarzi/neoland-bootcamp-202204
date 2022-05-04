/*function concat (array1, array2){
    const result=[]
  
    for (let i=0; i<array1.length;i++)
        result[i]=array1[i]

    for (let i=0; i<array2.length;i++)
        result[result.length]=array2[i]

    return result
}*/



/*function concat(arguments){
    const result= []

    for (let i=0; i<arguments.length;i++){ //ciclo que recorre todos los argumentos
    
        for (let j=0; j<arguments[i].length; j++) //con cada argumento recorro todos los elementos
            result[result.length]=arguments[i][j] //[i] la que me indica de que argumento hablamos j el elemento
    }
    return result
}*/


function concat() {
    const result = []

    for (let i = 0; i < arguments.length; i++) {
        const argument = arguments[i]

        if (argument)
            for (let j = 0; j < argument.length; j++) {
                const currElem = argument[j]

                result[result.length] = currElem
            }
        else
            result[result.length] = argument
    }

    return result
}








































/*function concat(array1, array2, array3 = []) {
    let newArray = []
    for (let value of array1) {
        newArray.push(value)    
    }
    for (let value of array2) {
        newArray.push(value)    
    }
    for (let value of array3) {
        newArray.push(value)    
    }
    return newArray
}*/









/*----------------------------------------> SOLO SIRVE PARA EL 1 CASO
function concat(array1, array2) {
    const result = []
    let index = 0

    for (let i = 0; i < array1.length; i++) {
        const currElem = array1[i]

        result[index] = currElem

        index++
    }

    for (let i = 0; i < array2.length; i++) {
        const currElem = array2[i]

        result[index] = currElem

        index++
    }

    return result
}

    /*
    - crear un array nuevo vacio (result)
    - recorrer el primer array (bucle)
    - mandar los valores del array1 al nuevo array
    - otro bucle con el array 2
    - hacer lo mismo
    - retornar el nuevo array
    */
