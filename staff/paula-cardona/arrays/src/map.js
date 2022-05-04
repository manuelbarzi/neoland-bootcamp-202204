function map (array, callback){
    const result= []                        //creamos la variable result porque nos devuelve un nuevo array
    for (let i= 0; i<array.length;i++){     //si cumple el for el elemento en la posición del indices (array[i]) pasará a recibir la función de callback y pasará a ser el elementocon la misma posición en resultado
        result[i] = callback(array[i])
    }
    return result

}



