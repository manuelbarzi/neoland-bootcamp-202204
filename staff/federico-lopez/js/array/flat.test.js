describe('flat', () => {

    test('depth one', () => {

        const arr1 = [0, 1, 2, [3, 4]]
        
        const result = flat(arr1) // expected output: [0, 1, 2, 3, 4]
        
        expect(arr1[0]).toBe(result[0])
        expect(arr1[1]).toBe(result[1])
        expect(arr1[2]).toBe(result[2])
        expect(arr1[3][0]).toBe(result[3])
        expect(arr1[3][1]).toBe(result[4])

    })

    test('depth two', () => {
        
        const arr2 = [0, 1, 2, [[[3, 4]]]]
        
        const result = flat(arr2, 2) // expected output: [0, 1, 2, [3, 4]]
        
        expect(result[0]).toBe(0)
        expect(result[1]).toBe(1)
        expect(result[2]).toBe(2)
        expect(result[3][0]).toBe(3)
        expect(result[3][1]).toBe(4)

    })

    test('depth three', () => {
        
        const arr2 = [0, [1, 2], 3, 4, [[[[3, 4]], 5]]]
        
        const result = flat(arr2, 3)
        
        expect(result[0]).toBe(0)
        expect(result[1]).toBe(1)
        expect(result[2]).toBe(2)
        expect(result[3]).toBe(3)
        expect(result[4]).toBe(4)
        expect(result[5][0]).toBe(3)
        expect(result[5][1]).toBe(4)
        expect(result[6]).toBe(5)

    })


})