describe ('concat', function() {

    it ('sum 2 arrays', function() {
        const array1 = ['a', 'b', 'c']
        const array2 = ['d', 'e', 'f']
        const result = concat(array1, array2)
        expect(result.length).toBe(array1.length+array2.length)
        expect(result.toString()).toBe(['a','b','c','d','e','f'].toString())
        expect(result[0]).toBe(array1[0])
        expect(result[1]).toBe(array1[1])
        expect(result[2]).toBe(array1[2])
        expect(result[3]).toBe(array2[0])
        expect(result[4]).toBe(array2[1])
        expect(result[5]).toBe(array2[2])
    })

    it ('sum 3 arrays', function() {
        const array1 = ['a', 'b', 'c']
        const array2 = ['d', 'e', 'f']
        const array3 = ['g', 'h', 'i']
        const result = concat(array1, array2, array3)
        expect(result.length).toBe(array1.length + array2.length + array3.length)
        expect(result[0]).toBe(array1[0])
        expect(result[1]).toBe(array1[1])
        expect(result[2]).toBe(array1[2])
        expect(result[3]).toBe(array2[0])
        expect(result[4]).toBe(array2[1])
        expect(result[5]).toBe(array2[2])
        expect(result[6]).toBe(array3[0])
        expect(result[7]).toBe(array3[1])
        expect(result[8]).toBe(array3[2])
    })

    it ('sum of 3 arryas and string', function() {
        const array1 = ['a', 'b', 'c']
        const array2 = ['d', 'e', 'f']
        const array3 = ['g', 'h', 'i']
        const result = concat(array1, array2, array3, 'q')
        expect(result.length ).toBe( array1.length + array2.length + array3.length +1)
        //expect(result).toBe('a', 'b', 'c', 'd', 'e', 'f')
        expect(result[0]).toBe(array1[0])
        expect(result[1]).toBe(array1[1])
        expect(result[2]).toBe(array1[2])
        expect(result[3]).toBe(array2[0])
        expect(result[4]).toBe(array2[1])
        expect(result[5]).toBe(array2[2])
        expect(result[6]).toBe(array3[0])
        expect(result[7]).toBe(array3[1])
        expect(result[8]).toBe(array3[2])
        expect(result[9]).toBe('q')
    })

    it ('sum of 3 aerrays and number', function() {
        const array1 = ['a', 'b', 'c']
        const array2 = ['d', 'e', 'f']
        const array3 = ['g', 'h', 'i']
        const result = concat(array1, array2, array3, 10)
        expect(result.length ).toBe( array1.length + array2.length + array3.length +1)
        //expect(result).toBe('a', 'b', 'c', 'd', 'e', 'f')
        expect(result[0]).toBe(array1[0])
        expect(result[1]).toBe(array1[1])
        expect(result[2]).toBe(array1[2])
        expect(result[3]).toBe(array2[0])
        expect(result[4]).toBe(array2[1])
        expect(result[5]).toBe(array2[2])
        expect(result[6]).toBe(array3[0])
        expect(result[7]).toBe(array3[1])
        expect(result[8]).toBe(array3[2])
        expect(result[9]).toBe(10)
    })
})