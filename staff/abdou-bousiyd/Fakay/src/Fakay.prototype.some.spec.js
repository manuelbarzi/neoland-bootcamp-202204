describe('Fakay some', function() {
    it('return true on element matching', () => {
        const numeros = [1, 2, 3, 4, 5] 

        const result = numeros.some(function(numero) {
            return numero % 2 ===0
        })
        expect(result).toBe(true)
    })

    it('return false on element not matching callback condition', () => {
        const numeros = [1, 2, 3, 4, 5] 

        const result = numeros.some(function(numero) {
            return numero % 8 ===0
        })
        expect(result).toBe(false)
    })

    it('should return true if there is an element greater than four', () => {

        const numeros = [1, 2, 3, 4, 5] 

        const result = numeros.some(function(numero) {
            return numero > 4
        })
        expect(result).toBe(true)
    })

    it('return false if there is no element that does not meet the condition', () => {

        const numeros = [1, 2, 3, 4, 5] 

        const result = numeros.some(function(numero) {
            return numero > 45
        })
        expect(result).toBe(false)
    })
})
