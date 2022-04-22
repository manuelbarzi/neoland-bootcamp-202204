describe('Fakay.prototype.indexOf', function(){

    
    it('Should index from first element given', function() {
        const beasts = new Fakay('ant', 'bison', 'camel', 'duck', 'bison')
        
        const result = beasts.indexOf('bison')
        
        expect(result).toBe(1)
    })
    
    it('Should index from second element given', function() {
        const beasts = new Fakay('ant', 'bison', 'camel', 'duck', 'bison')

        const result = beasts.indexOf('bison', 2)

        expect(result).toBe(4)
    })

})