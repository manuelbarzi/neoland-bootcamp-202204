/*
los parámetros de la función son, además del array, el valor que ha de reemplazar modificando
según que valores del array, el tercer parámbero es la posición desde donde comienza a reemplazar
y el cuarto parámetro es la posición hasta donde debe reemplazar



*/


function fill(array, elem, start = 0, end = array.length-1){
    for (let i = start; i < end; i++){
        array[i] = elem
    }
}


// NO ESTA RESUELTO