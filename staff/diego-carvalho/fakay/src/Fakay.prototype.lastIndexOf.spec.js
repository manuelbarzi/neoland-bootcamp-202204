describe('Faray.prototype.lastIndexOf', function(){
    const animals = new Fakay ('Dodo', 'Tiger', 'Penguin', 'Dodo', undefined)

    it('Look for an element that is repeated', () => {
        const result = animals.lastIndexOf('Dodo')
        
        expect(result).toBe(3)

    })

    it('Look for an element that is only once', () =>{
        const result = animals.lastIndexOf('Tiger')
        
        expect(result).toBe(1);

    })    

    it('Look for undefined', () => {
        const result = animals.lastIndexOf(undefined)
        
        expect(result).toBe(4);

    })



})