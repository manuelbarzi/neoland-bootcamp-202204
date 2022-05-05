describe('flat', function() {
    it('crear nuvea matriz', function() {
        const numeros = new Fakay (0, 1, 2, (3, 4))
        let result = numeros.flat(this)
       
        expect(result.length).toBe(5)
        expect(result[0]).toBe(0)
        expect(result[1]).toBe(1)
        expect(result[2]).toBe(2)
        expect(result[3]).toBe(3)
        expect(result[4]).toBe(4)   
    })
})