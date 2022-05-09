describe('Fakay.prototype.join', function(){

    
    it('Returns a string with the elements concatenated on a string separated by commas', function(){
        const elements = new Fakay ('Fire', 'Air', 'Water')
        
        const result = elements.join(',')
        
        expect(result).toBe('Fire,Air,Water')
    })
    
    it('Returns a string with the elements concatenated on a string with no separation', function(){
        const elements = new Fakay ('Fire', 'Air', 'Water')
        
        const result = elements.join('')
        
        expect(result).toBe('FireAirWater')
    })
    
    it('Returns a string with the elements concatenated on a string separated by middle dash', function(){
        const elements = new Fakay ('Fire', 'Air', 'Water')

        const result = elements.join('-')

        expect(result).toBe('Fire-Air-Water')
    })

})