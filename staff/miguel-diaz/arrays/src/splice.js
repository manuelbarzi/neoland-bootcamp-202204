function splice(arr, start, deleteCount = 0) {
    
    let deletedElements = []

    /* Set del Start
    Máximo: tamaño del array y no se aplica delete
    Mínimo: 0
    Negativo: cuenta desde atrás 
    */
    
    if (start > arr.length) {
        start = arr.length
        deleteCount = 0
    } else if (start === -Infinity){
        start = 0
    } else if (start < 0) {
        start = arr.length + start
    }

    /*
    Set del deleteCount
    Mínimo: 0
    Si no hay items a agregar, se borra desde el start
    */

    if (deleteCount < 0)
        deleteCount = 0

    if (arguments.length < 3)
        deleteCount = arr.length - start

    //Itero buscando cada uno de los items a agregar y los agrego desde start en orden descendente


    //

    while (deleteCount > 0) {
        deletedElements.push(arr[start])
        for (let i = start; i < arr.length; i++) {
            arr[i] = arr[i + 1]
        }
        arr.pop()
        deleteCount--
    }

    for (let i = arguments.length - 1; i >= 3; i--) {

        //Muevo una posición a la derecha los elementos anteriores del array desde start

        for (let j = arr.length; j >= start; j--) {
            arr[j+1] = arr[j] 
        }

        arr[start] = arguments[i]

    }

    return deletedElements
        
}