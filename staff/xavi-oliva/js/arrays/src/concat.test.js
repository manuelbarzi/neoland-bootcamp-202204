describe('concat', function () {
    
    const array1 = ['a', 'b', 'c']
    const array2 = ['d', 'e', 'f']

    test('merge two arrays', function() {

        const result = concat(array1, array2)

        expect(result.length).toBe(array1.length + array2.length)
        expect(result[0]).toBe('a')
        expect(result[1]).toBe('b')
        expect(result[2]).toBe('c')
        expect(result[3]).toBe('d')
        expect(result[4]).toBe('e')
        expect(result[5]).toBe('f')
        
    })

    const array3 = ['g', 'h', 'i']

    test('merge three arrays', function() {

        const result = concat(array1, array2, array3)

        expect(result.length).toBe(array1.length + array2.length + array3.length)
        expect(result[0]).toBe('a')
        expect(result[1]).toBe('b')
        expect(result[2]).toBe('c')
        expect(result[3]).toBe('d')
        expect(result[4]).toBe('e')
        expect(result[5]).toBe('f')
        expect(result[6]).toBe('g')
        expect(result[7]).toBe('h')
        expect(result[8]).toBe('i')
    })

    const array4 = ['j', 'k', 'l']

    test('merge four arrays', function() {

        const result = concat(array1, array2, array3, array4)

        expect(result.length).toBe(array1.length + array2.length + array3.length + array4.length)
        expect(result[0]).toBe('a')
        expect(result[1]).toBe('b')
        expect(result[2]).toBe('c')
        expect(result[3]).toBe('d')
        expect(result[4]).toBe('e')
        expect(result[5]).toBe('f')
        expect(result[6]).toBe('g')
        expect(result[7]).toBe('h')
        expect(result[8]).toBe('i')
        expect(result[9]).toBe('j')
        expect(result[10]).toBe('k')
        expect(result[11]).toBe('l')
    })

    const array5 = ['m', 'n', 'o']

    test('merge five arrays', function() {

        const result = concat(array1, array2, array3, array4, array5)

        expect(result.length).toBe(array1.length + array2.length + array3.length + array4.length + array5.length)
        expect(result[0]).toBe('a')
        expect(result[1]).toBe('b')
        expect(result[2]).toBe('c')
        expect(result[3]).toBe('d')
        expect(result[4]).toBe('e')
        expect(result[5]).toBe('f')
        expect(result[6]).toBe('g')
        expect(result[7]).toBe('h')
        expect(result[8]).toBe('i')
        expect(result[9]).toBe('j')
        expect(result[10]).toBe('k')
        expect(result[11]).toBe('l')
        expect(result[12]).toBe('m')
        expect(result[13]).toBe('n')
        expect(result[14]).toBe('o')
    })

    test('merge five arrays and a string', function() {

        const result = concat(array1, array2, array3, array4, array5, 'p')

        expect(result.length).toBe(array1.length + array2.length + array3.length + array4.length + array5.length + 1)
        expect(result[0]).toBe('a')
        expect(result[1]).toBe('b')
        expect(result[2]).toBe('c')
        expect(result[3]).toBe('d')
        expect(result[4]).toBe('e')
        expect(result[5]).toBe('f')
        expect(result[6]).toBe('g')
        expect(result[7]).toBe('h')
        expect(result[8]).toBe('i')
        expect(result[9]).toBe('j')
        expect(result[10]).toBe('k')
        expect(result[11]).toBe('l')
        expect(result[12]).toBe('m')
        expect(result[13]).toBe('n')
        expect(result[14]).toBe('o')
        expect(result[15]).toBe('p')
    })

    test('merge two arrays and a number between them', function() {

        const result = concat(array1, 10, array2)

        expect(result.length).toBe(array1.length + 1 + array2.length)
        expect(result[0]).toBe('a')
        expect(result[1]).toBe('b')
        expect(result[2]).toBe('c')
        expect(result[3]).toBe(10)
        expect(result[4]).toBe('d')
        expect(result[5]).toBe('e')
        expect(result[6]).toBe('f')

    })

    test('merge two arrays and a string between them', function() {

        const result = concat(array1, 'hola mundo', array2)

        expect(result.length).toBe(array1.length + 1 + array2.length)
        expect(result[0]).toBe('a')
        expect(result[1]).toBe('b')
        expect(result[2]).toBe('c')
        expect(result[3]).toBe('hola mundo')
        expect(result[4]).toBe('d')
        expect(result[5]).toBe('e')
        expect(result[6]).toBe('f')

    })

})