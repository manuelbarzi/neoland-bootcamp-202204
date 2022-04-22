describe('Fakay.prototype.concat', function () {
    
    it('merge two objects', function() {
        const letters1 = new Fakay ('a', 'b', 'c')
        const letters2 = new Fakay ('d', 'e', 'f')
        
        letters1.length = 3
        letters2.length = 3
        
        let result = new Fakay
        result = letters1.concat(letters2)
        

        expect(result.length).toBe(letters1.length + letters2.length)
        expect(result[0]).toBe('a')
        expect(result[1]).toBe('b')
        expect(result[2]).toBe('c')
        expect(result[3]).toBe('d')
        expect(result[4]).toBe('e')
        expect(result[5]).toBe('f')
        
    })

    
    it('merge three objects', function() {
        const letters1 = new Fakay ('a', 'b', 'c')
        const letters2 = new Fakay ('d', 'e', 'f')
        const letters3 = new Fakay ('g', 'h', 'i')

        const result = letters1.concat(letters2, letters3)

        expect(result.length).toBe(letters1.length + letters2.length + letters3.length)
        expect(result[0]).toBe('a')
        expect(result[1]).toBe('b')
        expect(result[2]).toBe('c')
        expect(result[3]).toBe('d')
        expect(result[4]).toBe('e')
        expect(result[5]).toBe('f')
        expect(result[6]).toBe('g')
        expect(result[7]).toBe('h')
        expect(result[8]).toBe('i')
    })

    
    it('merge four objects', function() {
        const letters1 = new Fakay ('a', 'b', 'c')
        const letters2 = new Fakay ('d', 'e', 'f')
        const letters3 = new Fakay ('g', 'h', 'i')
        const letters4 = new Fakay ('j', 'k', 'l')

        const result = concat(letters1, letters2, letters3, letters4)

        expect(result.length).toBe(letters1.length + letters2.length + letters3.length + letters4.length)
        expect(result[0]).toBe('a')
        expect(result[1]).toBe('b')
        expect(result[2]).toBe('c')
        expect(result[3]).toBe('d')
        expect(result[4]).toBe('e')
        expect(result[5]).toBe('f')
        expect(result[6]).toBe('g')
        expect(result[7]).toBe('h')
        expect(result[8]).toBe('i')
        expect(result[9]).toBe('j')
        expect(result[10]).toBe('k')
        expect(result[11]).toBe('l')
    })

    
    it('merge five objects', function() {
        const letters1 = new Fakay ('a', 'b', 'c')
        const letters2 = new Fakay ('d', 'e', 'f')
        const letters3 = new Fakay ('g', 'h', 'i')
        const letters4 = new Fakay ('j', 'k', 'l')
        const letters5 = new Fakay ('m', 'n', 'o')
        
        const result = concat(letters1, letters2, letters3, letters4, letters5)

        expect(result.length).toBe(letters1.length + letters2.length + letters3.length + letters4.length + letters5.length)
        expect(result[0]).toBe('a')
        expect(result[1]).toBe('b')
        expect(result[2]).toBe('c')
        expect(result[3]).toBe('d')
        expect(result[4]).toBe('e')
        expect(result[5]).toBe('f')
        expect(result[6]).toBe('g')
        expect(result[7]).toBe('h')
        expect(result[8]).toBe('i')
        expect(result[9]).toBe('j')
        expect(result[10]).toBe('k')
        expect(result[11]).toBe('l')
        expect(result[12]).toBe('m')
        expect(result[13]).toBe('n')
        expect(result[14]).toBe('o')
    })

    it('merge five objects and a string', function() {
        const letters1 = new Fakay ('a', 'b', 'c')
        const letters2 = new Fakay ('d', 'e', 'f')
        const letters3 = new Fakay ('g', 'h', 'i')
        const letters4 = new Fakay ('j', 'k', 'l')
        const letters5 = new Fakay ('m', 'n', 'o')

        const result = concat(letters1, letters2, letters3, letters4, letters5, 'p')

        expect(result.length).toBe(letters1.length + letters2.length + letters3.length + letters4.length + letters5.length + 1)
        expect(result[0]).toBe('a')
        expect(result[1]).toBe('b')
        expect(result[2]).toBe('c')
        expect(result[3]).toBe('d')
        expect(result[4]).toBe('e')
        expect(result[5]).toBe('f')
        expect(result[6]).toBe('g')
        expect(result[7]).toBe('h')
        expect(result[8]).toBe('i')
        expect(result[9]).toBe('j')
        expect(result[10]).toBe('k')
        expect(result[11]).toBe('l')
        expect(result[12]).toBe('m')
        expect(result[13]).toBe('n')
        expect(result[14]).toBe('o')
        expect(result[15]).toBe('p')
    })

    it('merge two objects and a number between them', function() {

        const letters1 = new Fakay ('a', 'b', 'c')
        const letters2 = new Fakay ('d', 'e', 'f')
        const result = concat(letters1, 10, letters2)

        expect(result.length).toBe(letters1.length + 1 + letters2.length)
        expect(result[0]).toBe('a')
        expect(result[1]).toBe('b')
        expect(result[2]).toBe('c')
        expect(result[3]).toBe(10)
        expect(result[4]).toBe('d')
        expect(result[5]).toBe('e')
        expect(result[6]).toBe('f')

    })

    it('merge two objects and a string between them', function() {

        const letters1 = new Fakay ('a', 'b', 'c')
        const letters2 = new Fakay ('d', 'e', 'f')
        const result = concat(letters1, 'hola mundo', letters2)

        expect(result.length).toBe(letters1.length + 1 + letters2.length)
        expect(result[0]).toBe('a')
        expect(result[1]).toBe('b')
        expect(result[2]).toBe('c')
        expect(result[3]).toBe('hola mundo')
        expect(result[4]).toBe('d')
        expect(result[5]).toBe('e')
        expect(result[6]).toBe('f')

    })

})