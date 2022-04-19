
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