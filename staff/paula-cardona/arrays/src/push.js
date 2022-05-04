function push(array) {
    for (let i = 1; i < arguments.length; i++) { //EL ARGUMENTS ES LO QUE AÑADO A EL ARRAY QUE ES 0. PONGO ARGUMENTS PORQUE QUIZA TENGO Q AÑADIR MAS DE UNO Y YA NO SERIA ARRAY
        const element = arguments[i]  //EN NOMBRE DEL ARGUMENT QUE DECIBE EN Y SU POSICIÓN LO GUARDAMOS EN ELEMENT

        array[array.length] = element //ESTE ELEMENTO LO GUARDAREMOS EN LA NUEVA ARRAY CN SU LENGTH
    }

    return array.length
}



/*arguments.length-1 significa que empieza por el ultimo,
arguments [i+1] querrá decir que empezamos a añadir en el 
último + 1 porque sino lo remplaza.


añado solo un elemento:
function push(array, element){
array [array.length] = element
return array-length
}*/