describe('Fakay lastIndexOf', function() {
    const array = ['a', 'c', 'b','e','c', undefined]

    it('should returns the position of the element', () => {

        const res1 = array.lastIndexOf('c')
        expect(res1).toBe(4) 
    })

    it('should return -1 if element not exist', () => {

        const res1 = array.lastIndexOf('f')
        expect(res1).toBe(-1) 
    })

    it('should return undefined', () => {

        const res1 = array.lastIndexOf()
        expect(res1).toBe(5) 
    })
})