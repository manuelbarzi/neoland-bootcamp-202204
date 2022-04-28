// slice(X, Y, Z): a partir de la posicion X (incluida) remplaza Y elementos por el Z elemento

describe ('Fakay.prototype.splice', function () {
    it('should add one element', function () {
        const palabras = new Fakay ('silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa')
        // expected = ['silla', 'mesa', 'cama', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa']
        
        const result = palabras.splice(2, 0, 'cama') // a partir de la posicion 2, NO reemplazo ninguno y pongo 'cama'
        expect(result.length).toBe(0)
        expect(palabras.length).toBe(8) // deberia ser 1 mas largo
        expect(palabras[2]).toBe('cama') // en la posicion 2 estara cama
        expect(palabras[3]).toBe('lampara') // y lampara pasara a la posicion 3
    })

    it('should change one element for one new', function () {
        const palabras = new Fakay ('silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa')
        // expected = ['silla', 'mesa', 'cama', 'ordenador', 'puerta', 'armario', 'sofa']
        
        const result = palabras.splice(2, 1, 'cama') // a partir de la posicion 2, reemplazo 3 elementos y pongo 'cama'
        expect(result.length).toBe(1)
        expect(result[0]).toBe('lampara')
        expect(palabras.length).toBe(7) // deberia ser 3 mas corto
        expect(palabras[2]).toBe('cama') // en la posicion 2 estara cama
        expect(palabras[3]).toBe('ordenador') // armario sera el siguiente
        expect(palabras[6]).toBe('sofa') // y sofa pasara a la posicion 3
    })
    
    it('should change three elements for two news', function () {
        const palabras = new Fakay ('silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa')
        // expected = ['silla', 'mesa', 'cama', 'armario', 'sofa']
        
        const result = palabras.splice(2, 3, 'cama') // a partir de la posicion 2, reemplazo 3 elementos y pongo 'cama'
        expect(result.length).toBe(3)
        expect(result[0]).toBe('lampara')
        expect(result[1]).toBe('ordenador')
        expect(result[2]).toBe('puerta')
        expect(palabras.length).toBe(5) // deberia ser 3 mas corto
        expect(palabras[2]).toBe('cama') // en la posicion 2 estara cama
        expect(palabras[3]).toBe('armario') // armario sera el siguiente
        expect(palabras[4]).toBe('sofa') // y sofa pasara a la posicion 3
    })

    it('should insert two diferents elements', function () {
        const palabras = new Fakay ('silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa')
        // expected = ['silla', 'mesa', 'cama', 'colchon', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa']
        
        const result = palabras.splice(2, 0, 'cama', 'colchon') // a partir de la posicion 2, reemplazo 3 elementos y pongo 'cama' y 'colchon'
        expect(result.length).toBe(0)

        expect(palabras.length).toBe(9)
        expect(palabras[2]).toBe('cama') 
        expect(palabras[3]).toBe('colchon') 
        expect(palabras[4]).toBe('lampara') 
        expect(palabras[5]).toBe('ordenador') 
    })

    it('should change three elements for two diferents news', function () {
        const palabras = new Fakay ('silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa')
        // expected = ['silla', 'mesa', 'cama', 'colchon', 'armario', 'sofa']
        
        const result = palabras.splice(2, 3, 'cama', 'colchon') // a partir de la posicion 2, reemplazo 3 elementos y pongo 'cama'
        expect(result.length).toBe(3)
        expect(result[0]).toBe('lampara')
        expect(result[1]).toBe('ordenador')
        expect(result[2]).toBe('puerta')
        expect(palabras.length).toBe(6) 
        expect(palabras[2]).toBe('cama') 
        expect(palabras[3]).toBe('colchon') 
        expect(palabras[4]).toBe('armario') 
        expect(palabras[5]).toBe('sofa') 
    }) 
    
})