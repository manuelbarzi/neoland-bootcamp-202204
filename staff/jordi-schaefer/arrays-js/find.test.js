{
    console.log('TEST find')



    const nums = [8, 3, 6, 4, 12, 9, 2, 1 , 13, 3, 4]

    {
        console.log('CASE 1')
        let n = 4

        // find: devuelve el valor del primer elemento que cumple la funcion
        const result = find(nums, function(elem){ // le enviamos el array y la funcion
            return elem > n        
        })
        console.assert(result===8)
    }


    const num2 = [3, 6, 4, 12, 9, 2, 1, 13, 3, 4]

    {
        console.log('CASE 2')

        // find: devuelve el valor del primer elemento que cumple la funcion
        const result = find(num2, function(elem){ // le enviamos el array y la funcion
            return elem%2===0   
        })
        console.assert(result===6)
    }
}