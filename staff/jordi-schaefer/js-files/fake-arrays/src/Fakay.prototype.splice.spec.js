// slice(X, Y, Z): a partir de la posicion X (incluida) remplaza Y elementos por el Z elemento

describe ('Fakay.prototype.splice', function () {
    it('should add one element', function () {
        const palabras = new Fakay ('silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa')
        // expected = ['silla', 'mesa', 'cama', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa']
        
        palabras.splice(2, 0, 'cama') // a partir de la posicion 2, NO reemplazo ninguno y pongo 'cama'
        expect(palabras.length).toBe(8) // deberia ser 1 mas largo
        expect(palabras[2]).toBe('cama') // en la posicion 2 estara cama
        expect(palabras[3]).toBe('lampara') // y lampara pasara a la posicion 3
    })

    it('should change three elements for one new', function () {
        const palabras = new Fakay ('silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa')
        // expected = ['silla', 'mesa', 'cama', 'ordenador', 'puerta', 'armario', 'sofa']
        
        palabras.splice(2, 1, 'cama') // a partir de la posicion 2, reemplazo 3 elementos y pongo 'cama'
        expect(palabras.length).toBe(7) // deberia ser 3 mas corto
        expect(palabras[2]).toBe('cama') // en la posicion 2 estara cama
        expect(palabras[3]).toBe('ordenador') // armario sera el siguiente
        expect(palabras[6]).toBe('sofa') // y sofa pasara a la posicion 3
    })
    
    it('should change three elements for two news', function () {
        const palabras = new Fakay ('silla', 'mesa', 'lampara', 'ordenador', 'puerta', 'armario', 'sofa')
        // expected = ['silla', 'mesa', 'cama', 'armario', 'sofa']
        
        palabras.splice(2, 3, 'cama') // a partir de la posicion 2, reemplazo 3 elementos y pongo 'cama'
        expect(palabras.length).toBe(5) // deberia ser 3 mas corto
        expect(palabras[2]).toBe('cama') // en la posicion 2 estara cama
        expect(palabras[3]).toBe('armario') // armario sera el siguiente
        expect(palabras[4]).toBe('sofa') // y sofa pasara a la posicion 3
    })
    
})