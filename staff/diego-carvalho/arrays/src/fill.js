
/*
 const array3 = [1, 2, 3, 4, 5, 8, 7]
 // [1, 2, 6, 6, 6, 8, 7])

 fill(array3, 6, 2, 5)//array(array3),elemente(6),start(2) y end(5)
*/

//para empezar a cria la función fill 1º le atribuo un ARRAY(array3);
//2º el ELEMENTO que quiero ingrezar (6);
//3º el START (2) el index del array desde donde quiero que empece a inserir el ELEMENTO (6); [Si start es 2, start =2 / si no hay strat, start=0]
//4º el END (5) el index del array donde quiero que termine de inserir el ELEMENTO (6).
function fill(array, element, start=0, end=array.length) { 

    const newArr = [] // creo un nuevo array vacio

    for (let i = start; i < end; i++) { // recorre desde la i= al valor START(2), hasta el valor END(5), de 1 en 1
        newArr[i] = element  //el newArr[i] es igual a element (6) (newAR = [1, 2, 6, 6, 6, 6, 7])
    }
    return newArr  // devuelto el nuevo array ENTERO, con los cambios ya hechos
     // [1, 2, 6, 6, 6, 8, 7])

}

