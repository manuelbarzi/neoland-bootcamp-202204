

function fill(array, valor, inicio=0, fin=array.length){ // recivo el array, valor a substituir, inicio que en caso de no recivir es 0, y el fin que si no recive nada es el largo del array (-1 porque luego le sumo 1)
    for (let i=inicio; i<fin; i++){ // le sumo 1 a fin para que cambie tambien la posicion de fin
        array[i]=valor // pongo el nuevo valor
    }
}