//El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

function slice(array, start=0, end=array.length) { //declara la función slice con las propiedades array, start y end predeterminado en 0
    const result = []          //declaro el resultado sin valor porque haré una nueva

    if (start<0) start=array.length+ start  //si start menor que 0, el numerito se lo resto empezando por la última posición, para saber el índice donde empiezas a contar
    if (end<0) end=array.length+ end //es lo mismo

    for (let i = start; i < end; i++) //recorro todo el array desde el inicio y final dependiendo si es positivo o negativo.
        result[i - start] = array[i] //[i - start] esto lo ponemos porque queremos que los elementos que vayamos obteniendo se guarden en result a partir de la posición 0, 
        //porque es la nueva array. La i será el valor que tengo para empezar, que será diferente en casa caso, por lo tanto le restaremos el mismo valor a start 
        //para que de 0, así aprovecho también la i que en cada ciclo va sumando 1, por lo tanto vamos colocando los elementos ordenados.

    return result
}




/* PARA TEST 1----------------->

function slice (array, start) {
    const result = []
    n=0

    for (let i=start; i<array.length; i++)
    result[i]=array[i]

    n++

    return result
}*/