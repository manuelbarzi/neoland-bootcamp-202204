// fill(value, start, end) / cambia los elementos del array desde y/o hasta una posicion definida

describe('fill', function() {
    test('fill all numbres', function(){
        numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]  // creamos un array con numeros
        fill(numeros, 1)                 // ejecutamos nuestra funcion fill

        for(let i=0; i<numeros.length; i++){  // recorrenos todas las posiciones del array
            expect(numeros[i]).toBe(1)        // comprobamos que todoas son 1
        }
    })

    test('fill from specific position', function(){
        numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]  // creamos un array con numeros
        fill(numeros, 1, 5)                 // ponesmos 1 a partir de la posicion 5 hasta el fin al

        expect(numeros[0]).toBe(1)
        expect(numeros[1]).toBe(2)
        expect(numeros[2]).toBe(3)
        expect(numeros[3]).toBe(4)
        expect(numeros[4]).toBe(5)
        for(let i=5; i<numeros.length; i++){  // desde la posicion 5 hasta el final
            expect(numeros[i]).toBe(1)        // comprobamos que todos son 1
        }
    })

    test('fill from-to specific position', function(){
        numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]  // creamos un array con numeros
        fill(numeros, 1, 5, 11)                 // ponemos 1 a partir de la posicion 5 hasta posicion 11

        expect(numeros[0]).toBe(1)
        expect(numeros[1]).toBe(2)
        expect(numeros[2]).toBe(3)
        expect(numeros[3]).toBe(4)
        expect(numeros[4]).toBe(5)
        for(let i=5; i<11; i++){        // desde la posicion 5 hasta la 11
            expect(numeros[i]).toBe(1)        // comprobamos que todos son 1
        }
        expect(numeros[11]).toBe(12)
        expect(numeros[12]).toBe(13)
        expect(numeros[13]).toBe(14)
        expect(numeros[14]).toBe(15)
    })
    
})




/*

{
    console.log('TEST fill')


    {
        console.log('CASE: 1')

        numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

        fill(numeros, 1) // substituye todos los numeros por 1
        for(let i=0; i<numeros.lenght; i++){ // con un for itero por todos los numeros comprobando si son 1
            console.assert(numeros[i]===1)
        }
    }

    {
        console.log('CASE: 2')

        numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

        fill(numeros, 1, 5) //  substituye todos los numeros por 1 a partir de la posicion 5
        
        console.assert(numeros[3]===4) // la posicion de 0 a 4 siguen siendo los mismos de antes
        console.assert(numeros[4]===5)
        for(let i=5; i<numeros.lenght; i++){ //  a partir de la pos 5 compruebo que todo sea 1
            console.assert(numeros[i]===1)
        }
    }


    {
        console.log('CASE: 3')

        numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

        fill(numeros, 1, 5, 11) // substituye todos los numeros por 1, a partir de pos 5 y hasta la pos 11
        
        console.assert(numeros[4]===5) // antes de la posicion 5 sigue manteniendo el mismo valor
        console.assert(numeros[12]===13) // despues de la posicion 11 sigue manteniendo el mismo valor
        for(let i=5; i<12; i++){ // entre la 5 (incluida) y la 12 (no incluida) todo tienen que ser 1
            console.assert(numeros[i]===1)
        }
    }

}

*/