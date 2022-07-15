describe('Fakay.prototype.some', () => {
    
    it('should check is some is pair', () => {
        
        const nums = new Fakay(1, 2, 3, 4, 5)
        
        const even = element => element % 2 === 0
        
        const result = nums.some(even)
        
        expect(result).toBe(true)

    })

    it('should check if a string is included', () => {
        
        const pets = new Fakay('dog', 'cat', 'bird', 'elephant')
        
        const isThereATiger = element => element === 'tiger'
        
        const result = pets.some(isThereATiger)
        
        expect(result).toBe(false)

    })

    it('should check if a string is included', () => {

        const pets = new Fakay('cat', 'dog', 'bird', 'elephant')

        const isThereACat = element => element === 'cat'
    
        const result = pets.some(isThereACat, 1)
    
        expect(result).toBe(false)
    })
})