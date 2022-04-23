

describe('TEST every', function() {
    test('should return true if there is an element that meets the condition', () => {
        
        const array = [1, 30, 39, 29, 10, 13];
        
        const result = every(array, function(element) {
            const num = 40
            return element < num
        })
        console.assert(result === true)
    })

    test('should return false if there are no elements that meet the condition', () => {
        
        const array = [1, 30, 39, 29, 10, 13];
        
        const result = every(array, function(element) {
            const num = 40
            return element > num
        })
        console.assert(result === false)
    })

    test('should return true if there are elements that meet the condition', () => {
        
        const nombres  = ['jorde', 'diego', 'carlos', 'nath', 'federico', 'yassin'];
        
        const result = every(nombres, function(nombre) {

            const num = 5
            return nombre.length > num
        })
        console.assert(result === true)
    }) 
    
    test('should return false if there are no elements that meet the condition', () => {
        
        const nombres  = ['jorde', 'diego', 'carlos', 'nath', 'federico', 'yassin'];
        
        const result = every(nombres, function(nombre) {

            const num = 15
            return nombre.length > num
        })
        console.assert(result === false)
    })
})
