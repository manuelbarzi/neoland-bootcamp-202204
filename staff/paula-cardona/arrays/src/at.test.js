describe ('at', function(){
    test ('positive index', function(){
    
    const array = [5, 12, 8, 130, 44];
    const result= at(array, 2)
    expect(result).toBe(8)
    })

    test ('negative index', function(){
    
        const array = [5, 12, 8, 130, 44];
        const result= at(array, -2)
        expect(result).toBe(130)
    })
})














































/*method takes an integer value and returns the item at that index, 
allowing for positive and negative integers. Negative integers count back from the last item in the array.



describe('at', function() {   
     //ponemos el nombre del test y le añadimos la función
     test('positive index', function() {
        const array = [5, 12, 8, 130, 44] //array 
        const result = at(array, 2) // marcamos que los parametros array y indice 2 seran lo que pasaremos porla función de at
        expect(result).toBe(8) // esperamos que el resultado sea 8
    })
    test('negative index', function() {
        const array = [5, 12, 8, 130, 44]
        const result = at(array, -2)

        expect(result).toBe(130)
    })
})


/*{---------------------------------------->
    console.log('TEST at')

    const array = [5, 12, 8, 130, 44]

    {
        console.log('CASE 1')

        const result = at(array, 2)

        console.assert(result === 8)
    }

    {
        console.log('CASE 2')

        const result = at(array, -2)

        console.assert(result === 130)
    }
}*/
