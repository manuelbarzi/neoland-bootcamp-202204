Fakay.prototype.fill = function fill(element, start = 0, end = this.length) {

    for (let i = start; i < end; i++) { // recorre desde la i= al valor START(2), hasta el valor END(5), de 1 en 1
        this[i] = element  //el this[i](desde start hasta end) es igual a element (6) (newAR = [1, 2, 6, 6, 6, 8, 7])
    }

    return// devuelto el this ENTERO, con los cambios ya hechos
       
}

/*
1º - para empezar a cria la función fill 1º le atribuo un this(this3);
2º - el ELEMENTO que quiero ingrezar (6);
3º - el START (2) el index del this desde donde quiero que empece a inserir el ELEMENTO (6); [Si start es 2, start =2 / si no hay strat, start=0]
4º - el END (5) el index del this donde quiero que termine de inserir el ELEMENTO (6).
*/

