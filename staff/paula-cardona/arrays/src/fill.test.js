/*The fill() method changes all elements in an array to a static value, 
from a start index (default 0) to an end index (default array.length). It returns the modified array.

fill(value)
fill(value, start)
fill(value, start, end) */


describe('fill', function () {
    test('fill all', function () {

        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] //declaramos una array con números donde le aplicaremos el fill

        const result= fill(array, 1)    //1=value del cambio      
        for (let i = 0; i < array.length; i++) {   //recorremos todas las posiciones del array y comprobamos que todos son 1.
            expect(array[i]).toBe(1)
        }
    })


    test('fill from specific position', function () {

        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] //declaramos una array con números donde le aplicaremos el fill

        const result = fill (array, 1, 5) //ponemos 1 a partir de la posición 5 hasta el final

        expect(array[0]).toBe(1)
        expect(array[1]).toBe(2)
        expect(array[2]).toBe(3)
        expect(array[3]).toBe(4)
        expect(array[4]).toBe(5)

        for (let i = 5; i < array.length; i++) {                        // desde la posición 5 hasta el final comprobamos que todos son 1
            expect(array[i]).toBe(1) //esperamos que todo los elementos del array en todas la posciones sean 5
        }

    })

    test('fill from 5 until 11', function () {

        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] //declaramos una array con números donde le aplicaremos el fill

        const result= fill(array, 1, 5, 11)                                    //ponemos 1 a partir de la posición 5 hasta el 11
        expect(array[0]).toBe(1)
        expect(array[1]).toBe(2)
        expect(array[2]).toBe(3)
        expect(array[3]).toBe(4)
        expect(array[4]).toBe(5)

        for (let i = 5; i < 11; i++) {                        // ponemos 1 del 5 a la 11(no incluido el 11), si queremos incluir el 11 podemos poner <= o 12
            expect(array[i]).toBe(1)
        }
        expect(array[11]).toBe(12)
        expect(array[12]).toBe(13)
        expect(array[13]).toBe(14)
        expect(array[14]).toBe(15)
    })

})





