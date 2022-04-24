
// splice(X, Y, Z): a partir de la posicion X (incluida) remplaza Y elementos por el Z elemento
describe ('Fakay.prototype.splice', function () {
    it('add one element', function () {
        const words = new Fakay ('chair', 'table', 'ligth', 'computer', 'door', 'wardrobe', 'sofa')
        // expected = ('chair', 'table', 'bed', 'ligth', 'computer', 'door', 'wardrobe', 'sofa')
        
       words.splice(2, 0, 'bed') // a partir de la posicion 2, NO reemplazo ninguno y pongo 'bed'
        
        expect(words.length).toBe(8) 
        expect(words[2]).toBe('bed') 
        expect(words[3]).toBe('ligth') 
    })

    it('changing three elements for an new one', function () {
        const words = new Fakay ('chair', 'table', 'ligth', 'computer', 'door', 'wardrobe', 'sofa')
        // expected = ('chair', 'table', 'bed', 'computer', 'door', 'wardrobe', 'sofa')
        
        words.splice(2, 1, 'bed')// 

        expect(words.length).toBe(7) 
        expect(words[2]).toBe('bed') 
        expect(words[3]).toBe('computer')
        expect(words[6]).toBe('sofa') 
    })
    
    it('changing three elements for two ones', function () {
        const words = new Fakay ('chair', 'table', 'ligth', 'computer', 'door', 'wardrobe', 'sofa')
        // expected = ('chair', 'table', 'bed', 'wardrobe', 'sofa')
        
        words.splice(2, 3, 'bed') 

        expect(words.length).toBe(5) 
        expect(words[2]).toBe('bed') 
        expect(words[3]).toBe('wardrobe') 
        expect(words[4]).toBe('sofa')
    })
    
})