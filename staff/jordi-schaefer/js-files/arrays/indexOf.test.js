describe('indexOf', function() {

    it('select string', function() {
        const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
        const result = indexOf(beasts, 'bison')
        expect(result).toBe(1)
    })

    it('select string from index 2', function() {
        const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
        const result = indexOf(beasts, 'bison', 2)
        expect(result).toBe(4)
    })

})