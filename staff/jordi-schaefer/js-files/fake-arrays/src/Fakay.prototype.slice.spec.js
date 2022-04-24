// slice(inicio, fin) devuelve un nuevo array que es el recorte del original desde y hasta las posiciones dadas (final NO incluido)

describe('Fakay.prototype.slice', function() {
    
    it('without indexes', function() {
        const palabras = new Fakay ('silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa')
        // expected = ['silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa']
        
        const result = palabras.slice() // si no le doy numero devuelve el mismo array
        expect(result.length).toBe(7)
        expect(result[0]).toBe('silla')
        expect(result[6]).toBe('sofa')
    })

    it('with start index', function() {
        const palabras = new Fakay ('silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa')
        // expected = ['lampara', 'ordenador', 'puerta', 'armario', 'sofa']
        
        const result = palabras.slice(2) // si le doy 1 numero indica solo el inicio del nuevo array que devolvera
        expect(result.length).toBe(5)
        expect(result[0]).toBe('lampara')
        expect(result[4]).toBe('sofa')
    })

    it('with start and end indexes', function() {
        const palabras = new Fakay ('silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa')
        // expected = ['lampara', 'ordenador', 'puerta']
        
        const result = palabras.slice(2, 5) // si le doy 2 numeros indica el inicio y el final que no estara incluido
        expect(result.length).toBe(3)
        expect(result[0]).toBe('lampara')
        expect(result[2]).toBe('puerta')
    })

    it('with negative start index', function() {
        const palabras = new Fakay ('silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa')
        // expected = ['mesa', 'lampara', 'ordenador', 'puerta']
        
        const result = palabras.slice(1, -2) // si le doy 2 numeros indica el inicio y el final que no estara incluido
        expect(result.length).toBe(4)
        expect(result[0]).toBe('mesa')
        expect(result[3]).toBe('puerta')
    })

    it('with negative start and end indexes', function() {
        const palabras = new Fakay ('silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa')
        // expected = ['lampara', 'ordenador', 'puerta']
        
        const result = palabras.slice(-5, -2)
        expect(result.length).toBe(3)
        expect(result[0]).toBe('lampara')
        expect(result[1]).toBe('ordenador')
        expect(result[2]).toBe('puerta') 
    })


})
