
/*
1º - para empezar a cria la función fill 1º le atribuo un ARRAY(array3);
2º - el ELEMENTO que quiero ingrezar (6);
3º - el START (2) el index del array desde donde quiero que empece a inserir el ELEMENTO (6); [Si start es 2, start =2 / si no hay strat, start=0]
4º - el END (5) el index del array donde quiero que termine de inserir el ELEMENTO (6).
*/
function fill(array, element, start = 0, end = array.length) {

    for (let i = start; i < end; i++) { // recorre desde la i= al valor START(2), hasta el valor END(5), de 1 en 1
        array[i] = element  //el array[i](desde start hasta end) es igual a element (6) (newAR = [1, 2, 6, 6, 6, 8, 7])
    }

    return// devuelto el array ENTERO, con los cambios ya hechos
       
}

