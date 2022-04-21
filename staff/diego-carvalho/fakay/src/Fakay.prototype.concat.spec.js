describe('Fakay.prototype.concat', function() {
    const obj1 = new Fakay ('a', 'b', 'c')
    const obj2 = new Fakay ('d', 'e', 'f')
    

    
    it('concating arrays', function () {
        const result = obj1.concat(obj1, obj2)

        expect(result.length).toBe(6)
        expect(result[0]).toBe('a')
        expect(result[1]).toBe('b')
        expect(result[2]).toBe('c')
        expect(result[3]).toBe('d')
        expect(result[4]).toBe('e')
        expect(result[5]).toBe('f')

    })    

    /*
    it('contating multiples arrays', function(){

        const result = obj1.concat(objy2, obj3) 
               

        expect(result.length).toBe(9)
        expect(result[0]).toBe('a')
        expect(result[1]).toBe('b')
        expect(result[2]).toBe('c')
        expect(result[3]).toBe('d')
        expect(result[4]).toBe('e')
        expect(result[5]).toBe('f')
        expect(result[6]).toBe('g')
        expect(result[7]).toBe('h')
        expect(result[8]).toBe('1')


    })*/

})

