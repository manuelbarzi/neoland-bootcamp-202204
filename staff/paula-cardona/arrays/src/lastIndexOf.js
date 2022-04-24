/*
- iterar array from last index
-check each position and see whether it maches the target element
-if it maches, the return index
-if it doesn't then return -1 */

/*
function lastIndexOf(array, value, fromIndex = array.length - 1) { //defino el from index=array.length porque siempre començare por el ultimo elemento
    for (let i = fromIndex; i >= 0; i--)           //este ultimo elemento si es igual o meyor a 0 (ya q si es mas pequeño el array no existe), entra en el for
        if (array[i] === value)                   //el elemento en i en ese momento se comprará si es igual al value dado, no hace falta guardar el dato 
            return i                              //si es que si devuelve el sitio
    return -1  
}*/


function lastIndexOf(array, searchElement, fromIndex = array.length - 1) {
    if (fromIndex >= 0)
        for (let i = fromIndex; i > -1; i--) {
            const currElem = array[i]

            if (currElem === searchElement) return i
        }
    else
        /*
        - i starts from array.length + fromIndex
        */
        for (let i = array.length + fromIndex; i > -1; i--) {
            const currElem = array[i]

            if (currElem === searchElement) return i
        }

    return -1
}
