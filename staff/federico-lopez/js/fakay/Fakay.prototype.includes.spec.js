describe('Fakay.prototype.includes', () => {

    it('should look for a number', () => {
        const numbers = new Fakay(1, 2, 3)
        expect(numbers.includes(2)).toBe(true)
    })

    const pets = new Fakay('cat', 'dog', 'bat', 'elephant', 'bird')

    it('should look for a string', () => {
        expect(pets.includes('cat')).toBe(true)
    })
    
    it('should return false because the string not included', () =>{
        expect(pets.includes('at')).toBe(false)
    })

    it('should return false because the string is included in a previous index', () => {
        expect(pets.includes('cat', 3)).toBe(false)
    })

})