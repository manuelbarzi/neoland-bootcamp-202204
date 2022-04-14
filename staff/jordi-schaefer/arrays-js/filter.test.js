{
    console.log('TEST filter')



    const nums = [8, 3, 6, 4, 12, 9, 2, 1 , 13, 3, 4]

    {
        console.log('CASE 1')
        let n = 4

        // filter: crea un nuevo array con todos los elementos que cumplan la condicion deseada
        const result = filter(nums, function(elem){ // le enviamos el array y la funcion
            return elem > n        
        })
        console.assert(result[0]===8)
        console.assert(result[1]===6)
        console.assert(result[2]===12)
        console.assert(result[3]===9)
        console.assert(result[4]===13)
    }


    const num2 = [8, 3, 6, 4, 12, 9, 2, 1, 13, 3, 4]

    {
        console.log('CASE 2')

        // filter: crea un nuevo array con todos los elementos que cumplan la condicion deseada
        const result = filter(num2, function(elem){ // le enviamos el array y la funcion
            return elem%2===0   
        })
        console.assert(result[0]===8)
        console.assert(result[1]===6)
        console.assert(result[2]===4)
        console.assert(result[3]===12)
        console.assert(result[4]===2)
        console.assert(result[5]===4)
    }
}