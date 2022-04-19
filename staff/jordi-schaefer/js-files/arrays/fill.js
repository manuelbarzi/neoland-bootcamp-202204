

function fill(array, valor, inicio=0, fin=array.length-1){ // recivo el array, valor a substituir, inicio que en caso de no recivir es 0, y el fin que si no recive nada es el largo del array (-1 porque luego le sumo 1)
    for (let i=inicio; i<fin+1; i++){ // le sumo 1 a fin para que cambie tambien la posicion de fin
        array[i]=valor // pongo el nuevo valor
    }
}