 describe('Every', function() {
     it('tests whether all elements in the array pass the test implemented by the provided function.', function () {
       
        const numeros = new Fakay (1, 30, 39, 29, 10, 13)

        const isBelowThreshold = (currentValue) => currentValue < 40
    
        const result = numeros.every(isBelowThreshold)
    
        expect(result).toBe(true)
     })

     it('Ejemplo 2', function() {
        const numeros = new Fakay (1, 30, 39, 29, 10, 13)

        const isBelowThreshold = (currentValue) => currentValue < 40
    
        const result = numeros.every(isBelowThreshold)
    
        expect(result).toBe(true)
     })
     
     it('Ejemplo 3', function () {
        const numword = new Fakay (1, 30, 39, 'palabra', 29, 10, 13)
    
        const allNumbers = (currentValue) => currentValue === 'palabra'
    
        const result = numword.every (allNumbers,5)
    
        expect(result).toBe(false)
     })
 })




