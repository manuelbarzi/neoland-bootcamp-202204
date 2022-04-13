function concat(array1, array2) {
    /*
    - crear un array nuevo vacio (result)
    - recorrer el primer array (bucle)
    - mandar los valores del array1 al nuevo array
    - otro bucle con el array 2
    - hacer lo mismo
    - retornar el nuevo array
    */

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