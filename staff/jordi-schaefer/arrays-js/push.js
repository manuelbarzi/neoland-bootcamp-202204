/*   VERSION para CASO 1

function push(array, element){
    array[array.length]=element
    return array.length
}

*/


function push(){
    array=arguments[0]
    for(let i=0; i<arguments.length-1; i++)
        array[array.length]=arguments[i+1]

    return array.length
}




/*
IMPORTANTE !

aun teniendo dentro de la funcion push otros nombres, dentro de la funcion siempre hacen referencia al original y modifical el original 
la referencia ha referencia ( o apunta ) en los dos casos a la misma memoria
para crear uno nuevo no puedo crearlo sin mas
¡¡ NO !!  new_array=array ¡¡ NO !!
de este modo estoy haciendo una copia de la direccion

He de generar uno nuevo y pasarle/copiarle los valores de uno a uno


function push(array, element){
    const new_array = []
    for (let i = 0; i < array.length; i++){
        new_array [i]=array[i]
    }
    new_array[new_array.length]=element
    return new_array.length
}
*/

