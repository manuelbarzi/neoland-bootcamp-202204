describe('Fakay.prototype.indexOf', function() {

    it('select string', function() {
        const beasts = new Fakay ('ant', 'bison', 'camel', 'duck', 'bison')
        
        const result = beasts.indexOf('bison')
        
        expect(result).toBe(1)
    })

    it('select string from index 2', function() {
        const beasts = new Fakay ('ant', 'bison', 'camel', 'duck', 'bison')
        
        const result = beasts.indexOf('bison', 2)
        
        expect(result).toBe(4)
    })

})