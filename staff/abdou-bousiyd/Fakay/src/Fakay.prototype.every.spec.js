
describe('Fakay every', function() {
    it('should return true if there is an element that meets the condition', () => {
        
        const array = [1, 30, 39, 29, 10, 13];
        
        const result = array.every(function(element) {
            const num = 40
            return element < num
        })
        expect(result).toBe(true) 
    })

    it('should return false if there are no elements that meet the condition', () => {
        
        const array = [1, 30, 39, 29, 10, 13];
        
        const result = array.every(function(element) {
            const num = 40
            return element > num
        })
        expect(result).toBe(false) 
    })

    it('should return false if neither meets the condition', () => {
        
        const nombres  = ['jorde', 'diego', 'carlos', 'nath', 'federico', 'yassin'];
        
        const result = nombres.every(function(nombre) {

            const num = 5
            return nombre.length > num
        })
        expect(result).toBe(false)
    }) 
    

    it('should return true if all meet the condition', () => {
        
        const nombres  = ['jorde', 'diego', 'nathy', 'yasin'];
        
        const result = nombres.every(function(nombre) {

            const num = 5
            return nombre.length === num
        })
        expect(result).toBe(true)
    }) 
})
