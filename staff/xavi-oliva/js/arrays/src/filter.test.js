describe('filter', function () {

    test('Creates a new array with all elements that pass the test implemented by the provided function. Element > 4', function () {
        
        const nums = [8, 3, 6, 4, 12, 9, 2, 1, 13, 3, 4]
    
        let n = 4

        const result = filter(nums, function (elem) { 
            return elem > n
        })

        expect(result[0]).toBe(8)
        expect(result[1]).toBe(6)
        expect(result[2]).toBe(12)
        expect(result[3]).toBe(9)
        expect(result[4]).toBe(13)

    })

    test('Creates a new array with all elements that pass the test implemented by the provided function. word.length > 6', function () {
        
        const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

        const result = filter(words, (word) => word.length > 6);

        expect(result[0]).toBe('exuberant')
        expect(result[1]).toBe('destruction')
        expect(result[2]).toBe('present')

    })

    test('Creates a new array with all elements that pass the test implemented by the provided function. Element % 2 === 0', function () {
        
        const num2 = [8, 3, 6, 4, 12, 9, 2, 1, 13, 3, 4]
        
        const result = filter(num2, function (elem) { 
            return elem % 2 === 0
        })

        expect(result[0]).toBe(8)
        expect(result[1]).toBe(6)
        expect(result[2]).toBe(4)
        expect(result[3]).toBe(12)
        expect(result[4]).toBe(2)
        expect(result[5]).toBe(4)        

    })

})