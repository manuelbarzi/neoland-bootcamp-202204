describe('map', () => {
    const numbers = [1, 4, 9, 16]

    test('Array multiplied for 2', () => {
       
        const doubles = map(numbers, function(elem){
            return elem * 2
        })
        
        const expectedResult = [2, 8, 18, 32]

        checkArrays(doubles, expectedResult);

    })

    test('Array sum 10', () => {
        
        const doubles = map(numbers, function(elem){
            return elem + 10
        })
        
        const expectedResult = [11, 14, 19, 26]

        checkArrays(doubles, expectedResult);  

    })

})