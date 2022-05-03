describe('Fakay includes', function() {
    it('should return true', () => {

        const array = [1, 2, 3];
        const result = array.includes(2)
        expect(result).toBe(true) 
    })

    it('should return false', () => {

        const array = [1, 2, 3];
        const result = array.includes(4)
        expect(result).toBe(false) 
    })

    it('should return false', () => {

        const pets = ['cat', 'dog', 'bat'];

        const result = pets.includes('at')
        expect(result).toBe(false)

    })
    it('should return false', () => {

        const pets = ['cat', 'dog', 'bat'];

        const result = pets.includes('bat')
        expect(result).toBe(true)

    })
})
