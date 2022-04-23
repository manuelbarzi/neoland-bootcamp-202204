describe('Fakay.prototype.At', () =>{

    const numbers = new Fakay(5, 12, 8, 130, 44)
    
    it('should work with a postive index', () => {
        const index = 2
        const result = numbers.at(index)
        expect(result).toBe(8)
    })

    it('should work with a negative index', () => {
        const index = -2
        const result = numbers.at(index)

        expect(result).toBe(130)
    })

    it('should return undefined with a non-declarated index as parameter', () => {
        const index = 5
        const result = numbers.at(index)
        expect(result).toBeUndefined()
    })

    it('should return undefined with a string as parameter', () => {
        const index = 'hello world'
        const result = numbers.at(index)
        expect(result).toBeUndefined()

    })

})
