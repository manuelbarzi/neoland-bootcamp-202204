describe('Fakay.prototype.filter', function () {

    it('Creates a new array with all elements that pass the test implemented by the provided function. word.length > 6', function () {
        
        const words = new Fakay ('spray', 'limit', 'elite', 'exuberant', 'destruction', 'present')

        const result = words.filter(word => word.length > 6);
        
       
        //expect (result.length===expected.length).toBe(true)
        

        expect(result[0]).toBe('exuberant')
        expect(result[1]).toBe('destruction')
        expect(result[2]).toBe('present')

    })
})