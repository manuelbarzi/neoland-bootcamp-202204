
describe('unshift', function () {
    test('Add multiple elements to array', function () {

        const array1 =  [1, 2, 3];

        const result = unshift(array1, 2, 8)

        const expectedArray =  [2, 8, 1, 2, 3];
        
        expect(result.length).toBe(5)

        // expect(result[0]).toBe(expectedArray[0])
        
    })


    test('Add one element to array', function () {

        const array1 =  [1, 2, 3];

        const result = unshift(array1, 5)

        const expectedArray =  [5, 1, 2, 3];
        
        expect(result.length).toBe(4)

        // expect(result[0]).toBe(expectedArray[0])
        
    })

})
