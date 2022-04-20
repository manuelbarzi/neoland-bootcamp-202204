// crea un nuevo array eliminando los elementos indicados entre los parametros indicados  (str y fin)
// aislar en otra array los valores a eliminiar y recorer el resto de la array con el indice nuevo

/* function slice (array , str = 0 , fin){
    debugger
    let n = 0
    let newarray = [] 
    let newarray2 = []
    for (i= 0; i < array.length; i++) { // recoro el array y voy incrementadno 
         if ( str >= i ) { // mientras str sea mayor al indice hacemos la replica
             newarray[n] = array[i] // Donde le puedo incrementar el valor de n cada vez ¿? con i la replica 
              n++  //no incrementa
         } if (fin >= i) { newarray2[n] = array[i]} // mientras sea mayor o igual el ultimo elemento a eliminar del indice añadire el contenido a la nueva array
            n++
    } return newarray + newarray2 // devuelvo el array modificado 
} 
 */


function slice(array, start, end = array.length) {
    const result = []

    if (start >= 0) {
        if (end >= 0)
            for (let i = start; i < end; i++)
                result[i - start ] = array[i]
        else        
            for (let i = 0; i < array.length; i++)
                result[i-start] = array[i]

    } else 
        for (let i = end + start; i < end; i++)
            result[i - end -start] = array [i]
        
    return result       
} 
