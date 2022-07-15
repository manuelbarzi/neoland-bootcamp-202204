describe('shift', () => {

    test('shift one element', () => {

        const array1 = [1, 2, 3];
        
        const result = shift(array1);
        
        const arrayExpected = [2, 3]
        
        const resultExpected = 1
        
        expect(result).toBe(resultExpected)
        
        checkArrays(array1, arrayExpected)

    })

    test('shift and empty array', () => {

        const array1 = [];
        
        const result = shift(array1);
        
        const arrayExpected = []
        
        const resultExpected = undefined
        
        expect(result).toBe(resultExpected)
        
        checkArrays(array1, arrayExpected)

        test('shift one element', () => {

            const myFish = ['angel', 'clown', 'mandarin', 'surgeon']
            
            const result = shift(myFish);
            
            const arrayExpected = ['clown', 'mandarin', 'surgeon']
            
            const resultExpected = 'angel'

            expect(result).toBe(resultExpected)
        
            checkArrays(array1, arrayExpected)

        })

    })

})