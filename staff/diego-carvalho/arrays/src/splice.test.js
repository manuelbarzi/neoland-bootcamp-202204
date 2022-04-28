// slice(X, Y, Z): a partir de la posicion X (incluida) remplaza Y elementos por el Z elemento

describe ('splice', function () {
    test('add one element', function () {
        const palabras = ['chair', 'table', 'light', 'computer', 'door', 'wardrobe', 'sofa']
        // expected = ['chair', 'table', 'bed', 'light', 'computer', 'door', 'wardrobe', 'sofa']
        
        splice(palabras, 2, 0, 'bed') 

        expect(palabras.length).toBe(8) 
        expect(palabras[2]).toBe('bed') 
        expect(palabras[3]).toBe('light') 
    })

    test('change three elements for one new', function () {
        const palabras = ['chair', 'table', 'light', 'computer', 'door', 'wardrobe', 'sofa']
        // expected = ['chair', 'table', 'bed', 'computer', 'door', 'wardrobe', 'sofa']
        
        splice(palabras, 2, 1, 'bed') 

        expect(palabras.length).toBe(7)

        expect(palabras[2]).toBe('bed') 
        expect(palabras[3]).toBe('computer')
        expect(palabras[6]).toBe('sofa') 
    })
    
    test('change three elements for two news', function () {
        const palabras = ['chair', 'table', 'light', 'computer', 'door', 'wardrobe', 'sofa']
        // expected = ['chair', 'table', 'bed', 'wardrobe', 'sofa']
        
        splice(palabras, 2, 3, 'bed') 

        expect(palabras.length).toBe(5) 
        
        expect(palabras[2]).toBe('bed') 
        expect(palabras[3]).toBe('wardrobe') 
        expect(palabras[4]).toBe('sofa') 
    })
    
})