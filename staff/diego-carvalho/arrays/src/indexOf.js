
/*
- recorrer elementos del array
- comprobar si alguno de ellos es igual al element
- retornar el indice del element dentro del array
- si no lo encuentra, retornar -1
*/

function indexOf(array, valor, fromIndex = 0){
    for (i=fromIndex; i<array.length; i++){
        if(array[i]===valor){
            return i
        }
    }
    return -1
}