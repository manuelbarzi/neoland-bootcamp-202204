describe('Fakay.prototype.indexOf', () => {
    it('When put one element', () => {
        
        //const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
        const beasts = new Fakay('ant', 'bison', 'camel', 'duck', 'bison')
        
        //const result = indexOf(beasts, 'bison')
        const result = beasts.indexOf('bison')
        
        expect(result).toBe(1)        
    })
})