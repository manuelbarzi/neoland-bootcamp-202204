describe('Fakay.prototype.indexOf', () => {

    const beasts = new Fakay('ant', 'bison', 'camel', 'duck', 'bison')

    it('should return the first index of a string', () => {
        const result = beasts.indexOf('bison')
        expect(result).toBe(1)
    })

    it('should return the first index of a string starting from index 2', () => {
        const result = beasts.indexOf('bison', 2)
        expect(result).toBe(4)
    })

    it('should return -1 because the elements is not included in the fakay', () => {
        const result = beasts.indexOf('dog', 2)
        expect(result).toBe(-1)
    })
    
})