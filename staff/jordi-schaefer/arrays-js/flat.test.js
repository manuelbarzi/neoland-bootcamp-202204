
{
    console.log('TEST flat')


    {
        console.log('CASE: 1')

        numeros = [1, 2, 3, [4.1, 4.2, 4.3], 5, 6, 7, 8, 9, 10]

        result = flat(numeros) // crea un nuevo array eliminando el array interior
        console.assert(result.length===12) // el array ahora deberia ser mas largo
        console.assert(result[3]===4.1) //deberia incluir los objetos del array que estaba en numeros [3]
        console.assert(result[4]===4.2) // en las siguientes 3 posiciones
        console.assert(result[5]===4.3) // en lugas del 5 y 6 que tenia antes
    }


    {
        console.log('CASE: 2')

        numeros = [1, 2, 3, [[4.1, 4.2, 4.3]], 5, 6, 7, 8, 9, 10]

        result = flat(numeros, 1) // crea un nuevo array quitando 1 nivel de sub elemento, es decir quedaria igual pero solo con 1 corchetes
        console.assert(result.length===10) // el array sigue siendo igual de largo
        console.assert(result[3][0]===4.1) // la posicion 3 del array mantiene el sub-array
        console.assert(result[3][1]===4.2) 
        console.assert(result[3][2]===4.3) 
        console.assert(result[4]===5) // y la pos 4 sigue manteniendo el valor 5
    }


    {
        console.log('CASE: 3')

        numeros = [1, 2, 3, [[4.1, 4.2, 4.3]], 5, 6, 7, 8, 9, 10]

        result = flat(numeros, 2) // crea un nuevo array eliminando los dos sub-arrays anteriores
        console.assert(result.length===12) // el array ahora deberia ser mas largo
        console.assert(result[3]===4.1) //deberia incluir los objetos del array que estaba en numeros [3]
        console.assert(result[4]===4.2) // en las siguientes 3 posiciones
        console.assert(result[5]===4.3) // en lugas del 5 y 6 que tenia antes
    }


    {
        console.log('CASE: 4, full sub-arrays')

        numeros = [1, 2, 3, [[[[[4.1, 4.2, 4.3]]]]], 5, 6, 7, 8, 9, 10]

        result = flat(numeros, 5) // crea un nuevo array eliminando los 5 sub-arrays anteriores
        console.assert(result.length===12) // el array ahora deberia ser mas largo
        console.assert(result[3]===4.1) //deberia incluir los objetos del array que estaba en numeros [3]
        console.assert(result[4]===4.2) // en las siguientes 3 posiciones
        console.assert(result[5]===4.3) // en lugas del 5 y 6 que tenia antes
    }
    

    {
        console.log('CASE: 5, muy loco')

        numeros = [1, 2, 3, [[[[4.1, 4.2, [4.31, 4.32], 4.4]]]], 5, 6, [[[7.111, 7.211]]], 8, [[9.11, 9.21]], 10]
        // expected output = [1, 2, 3, [4.1, 4.2, [4.31, 4.32], 4.4], 5, 6, 7.111, 7.211, 8, 9.11, 9.21, 10]

        result = flat(numeros, 3) // saco 3 niveles, si hay mas solo saco tres, si hay menos saca los que hayan
        console.assert(result.length===12) 
        console.assert(result[3][0]===4.1) 
        console.assert(result[3][1]===4.2) 
        console.assert(result[3][2][0]===4.31) // este no lo saca, ni lo debe sacar, esta correcto!
        console.assert(result[4]===5) 
        console.assert(result[6]===7.111) 
        console.assert(result[9]===9.11) 
    }
}