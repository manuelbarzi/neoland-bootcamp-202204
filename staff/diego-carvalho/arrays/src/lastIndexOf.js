/*- recorrer elementos del array
- comprobar si alguno de ellos es igual al element
- retornar la ultima vez que el elemente ha sido encontrado en la array.
-
- si no lo encuentra, retornar -1*/

function lastIndexOf(array, searchElement, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
        var currentElement = array[i]

        if (currentElement === searchElement)
           return i
    }

   return -1
}

//the last index at which a given element can be found in the array