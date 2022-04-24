describe('concat', function() {
    const array1 = ['a', 'b', 'c']
    const array2 = ['d', 'e', 'f']


    test('concating arrays', function () {
        const results = concat(array1, array2)

        expect(results.length).toBe(6)
        expect(results[0]).toBe('a')
        expect(results[1]).toBe('b')
        expect(results[2]).toBe('c')
        expect(results[3]).toBe('d')
        expect(results[4]).toBe('e')
        expect(results[5]).toBe('f')

    })

    const array3 = ['g', 'h', '1']

    test('contating multiples arrays', function(){
        const results1 = concat(array1, array2, array3)

        expect(results1.length).toBe(9)
        expect(results1[0]).toBe('a')
        expect(results1[1]).toBe('b')
        expect(results1[2]).toBe('c')
        expect(results1[3]).toBe('d')
        expect(results1[4]).toBe('e')
        expect(results1[5]).toBe('f')
        expect(results1[6]).toBe('g')
        expect(results1[7]).toBe('h')
        expect(results1[8]).toBe('1')

    })

})





