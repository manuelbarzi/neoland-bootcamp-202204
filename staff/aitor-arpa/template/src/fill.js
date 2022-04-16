// recogo los valores = value , la posicion de inicio del cambio str, y la posicion final.
// mientras que i sea menor o igual que el final(end) en cambio su valor hasta que i sea < que el final (end).


function fill( array, value, str = 0, end = array.length -1 ){ 
        debugger
       for (i= str; i<=end; i++){ // igualo la posicion del elemento con el parametro que envie el usuario ( si no se declara empieza desde la posicion inicial) 
        //mientras la posicion sea menor a la introducida por el usuario seguira cambiando el valor origial por el indicado 
        array[i]=value // cambio el elemento en la posicon i por el valor que el usuario introduce
    } return
}
     
