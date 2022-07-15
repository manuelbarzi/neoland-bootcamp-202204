describe('Fakay.prototype.lastIndexOf', () => {

    const animals = new Fakay('Dodo', 'Tiger', 'Penguin', 'Dodo', undefined)

    it('should look for an element that is repeated and return the last index', () => {
        
        const index = animals.lastIndexOf('Dodo')
        
        expect(index).toBe(3)

    })

    it('should look for an element that is only once', () =>{
        
        const index = animals.lastIndexOf('Tiger')
        
        expect(index).toBe(1)

    })    

    it('should look for undefined', () => {
        
        const index = animals.lastIndexOf(undefined)
        
        expect(index).toBe(4)

    })

})