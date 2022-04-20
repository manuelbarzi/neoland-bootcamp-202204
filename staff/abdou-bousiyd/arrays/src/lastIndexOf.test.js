describe('lastIndexOf', function() {
    test('should returns the position of the element', () => {
        const res1 = lastIndexOf(['a', 'c', 'b','e','c'], 'c')
        expect(res1).toBe(4) 

    })
})