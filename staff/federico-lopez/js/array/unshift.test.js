describe('unshift', () => {

    test('unshifting two elements', () => {

        const array1 = [1, 2, 3]
    
        const result = unshift(array1, 4, 5)
    
        const expectedResult = 5
    
        const expectedArray = [4, 5, 1, 2, 3]

        expect(result).toBe(expectedResult)

        checkArrays(array1, expectedArray)

    })

    test('unshifting three elements', () => {

        const array1 = [4, 5, 6]
        
        const result = unshift(array1, 1, 2, 3)
        
        const expectedResult = 6
        
        const expectedArray = [1, 2, 3, 4, 5, 6]

        expect(result).toBe(expectedResult)

        checkArrays(array1, expectedArray)

    })

    test('unshifting three elements, one at the time', () => {

        const array1 = [4, 5, 6]
        
        unshift(array1, 1)
        unshift(array1, 2)
        unshift(array1, 3)
        
        const expectedArray = [3, 2, 1, 4, 5, 6]

        checkArrays(array1, expectedArray)

    })

})