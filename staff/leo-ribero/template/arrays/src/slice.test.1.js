/*
slice no modifica el array original. Devuelve una copia plana (shallow copy) 
de los elementos especificados del array original. Los elementos del array original s
on copiados en el array devuelto de la siguiente manera:

var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var masculinos = nombres.slice(1, 3);

// masculinos contiene ['Pedro','Miguel']


*/

describe('slice', function(){
    
    it('when only positive start index, without end', function(){

        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
        const result = slice(animals,2, 4)
        // camel duch eleohant
        expect(result.length).toBe(3)
        // falta completarlo

    })
    
    it('positive start and positive end', function(){

        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
        const result = slice(animals,2)
        // camel duch eleohant
        expect(result.length).toBe(3)

    })
    
    it('when only start and is negative', function(){

        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
        const result = slice(animals, -2)
        // camel duch eleohant
        expect(result.length).toBe(3)

    })
    
    it('when positive start and negative end', function(){

        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
        const result = slice(animals,2 -1)
        // camel duck
        expect(result.length).toBe(3)

    })


})