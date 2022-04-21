/*
los parámetros de la función son, además del array, el valor que ha de reemplazar modificando
según que valores del array, el tercer parámbero es la posición desde donde comienza a reemplazar
y el cuarto parámetro es la posición hasta donde debe reemplazar
*/


function fill(array, elem, start = 0, end = array.length){
    for (let i = start; i < end; i++){
        array[i] = elem
    }
}





// JORDI |

// function fill(array, valor, inicio=0, fin=array.length-1){ // recivo el array, valor a substituir, inicio que en caso de no recivir es 0, y el fin que si no recive nada es el largo del array (-1 porque luego le sumo 1)
//     for (let i=inicio; i<fin+1; i++){ // le sumo 1 a fin para que cambie tambien la posicion de fin
//         array[i]=valor // pongo el nuevo valor
//     }
// }



// CODIGO DE FEDE

// function fill(arr, value, start = 0, end = arr.length) {

//     if (start < 0)
//         start = arr.length + start
//     if (end < 0)
//         end = arr.length + end

//     for (let i = start; i < end; i++)
//         arr[i] = value
//     return arr
    
// }

////////////////////////////////////////////////////////
/*
SYNTAX fill

arr.fill(value[, start = 0[, end = this.length]])

(below this) 

*/

// function fill(array, elem, start = 0, end = array.length){
//     if (start < 0)
//         start = array.length + start
//     if (end < 0)
//         end = array.length + end
//     for (let i = start; i < end; i++)
//         array[i] = elem
//     return array    
// }

/// esta de arriba es la versión que funciona inspirada en Fede

// function fill(array, value, start=0, end=array.length){
//     for (let i = start; i<end; i++){
//         array[i] = value
//     }
// }



