describe('lastindexOf', function () {
    it('without start index', function () {
        const animals = ['ant', 'bison', 'camel', 'duck', 'bison']
        const result = lastindexOf(animals, 'bison')
        expect(result).toBe(4)
    })

    it('without start index', function () {
        const animals = ['ant', 'bison', 'camel', 'duck', 'bison']
        const result = lastindexOf(animals, 'camel')
        expect(result).toBe(2)
    })

    it('without start index', function () {
        const animals = ['ant', 'bison', 'camel', 'duck', 'bison']
        const result = lastindexOf(animals, 'ant')
        expect(result).toBe(0)
    })

    it('with start index', function () {
        const animals = ['ant', 'bison', 'camel', 'duck', 'bison']
        const result = lastindexOf(animals, 'bison', 2)
        expect(result).toBe(4)
    })

    it('with negative start index', function () {
        const animals = ['ant', 'bison', 'camel', 'duck', 'bison']
        const result = lastindexOf(animals, 'bison', -1)
        expect(result).toBe(1)
    })

    it('with negative start index', function () {
        const animals = ['ant', 'bison', 'camel', 'duck', 'bison']
        const result = lastindexOf(animals, 'bison', -3)
        expect(result).toBe(1)
    })

})