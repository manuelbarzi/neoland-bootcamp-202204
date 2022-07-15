describe('reverse', () => {

    test('reverse an array', () => {

        const array1 = ['one', 'two', 'three'];
        
        const reversed = reverse(array1)
        
        const expectedArray = ["three", "two", "one"]

        checkArrays(array1, expectedArray)
        checkArrays(reversed, expectedArray)
        checkArrays(array1, reversed)

    })

    test('reverse a longer array', () => {

        const array1 = [1, 2, 3, 4, 5, 6]
        
        const reversed = reverse(array1)
        
        const expectedArray = [6, 5, 4, 3, 2, 1]

        checkArrays(array1, expectedArray)
        checkArrays(reversed, expectedArray)
        checkArrays(array1, reversed)

    })

})