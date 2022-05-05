
// creo una funcion que le llamo map
// dentro del parentesis le doy nombre a lo que recivo
function map(array_num, callback){
    // creo un nuevo array vacio
    let nuevo_array = []
    // utilizo el for para recorrer cada uno de los valores de los arrays
    // 'i' lo uso para indicar la posicion del array
    for(let i = 0; i < array_num.length; i++){
        // cada valor de array_num se lo paso a cada posicion de nuevo_array
        // pero ejecutando la funcion callback sobre cada valor de array_num. 
        // O sea,la array (nueva_array[]) tendrá los valores dividindos por la funcion [10/2=5,20/2=10,40/2=20,30/2=15] 
        nuevo_array[i]=callback(array_num[i]) 
    }
    // cuando finaliza el for, ya he pasado los valores al nuevo_array
    // devuelvo el nuevo_array
    return nuevo_array
}
