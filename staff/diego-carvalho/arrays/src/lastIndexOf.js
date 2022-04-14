/*- recorrer elementos del array
- comprobar si alguno de ellos es igual al element
- retornar la ultima vez que el elemente ha sido encontrado en la array.
-
- si no lo encuentra, retornar -1*/

//the last index at which a given element can be found in the array

 function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--)
        if (array[i] === value)
            return i
    return -1
}
