console.log('TEST fill')

describe('Fakay fill', function() {
    it('should fill with 1 from position 1 until position 3', () => {

        const numeros = [1, 2, 3, 4, 5]
        
        const value = 1
        const start = 1
        const end = 3
        
        numeros.fill(value, start, end)
        
        const array2 = [1, 1, 1, 4, 5]
        expect(numeros.length).toBe(array2.length) 
        for(let i = 0; i <  numeros.length; i++) {
            expect(numeros[i]).toBe(array2[i]) 
        }
    })

    it('should fill with fives from 1', () => {
        const numeros = [1, 2, 3, 4, 5]
        const value = 5
        const start = 1

        numeros.fill(value, start)
        
        const array2 = [1, 5, 5, 5, 5]
        expect(numeros.length).toBe(array2.length)

        for(let i = 0; i <  numeros.length; i++) {
            expect(numeros[i]).toBe(array2[i])
        }
    })

    it('should fill all the array with 7', () => {
        const numeros = [1, 2, 3, 4, 5]
        const value = 7

        numeros.fill(value)
        const array2 = [7, 7, 7, 7, 7]
        expect(numeros.length).toBe(array2.length)

        for(let i = 0; i <  numeros.length; i++) {
            expect(numeros[i]).toBe(array2[i])
        }
    })
})