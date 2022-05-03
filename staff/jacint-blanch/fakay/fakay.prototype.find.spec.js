describe('Fakay.prototype.find', () => {
    it('should return the first element that passes the function provided', () => {
        
        const nums = new Fakay(8, 3, 6, 4, 12, 9, 2, 1 , 13, 3, 4)

        
        // find: devuelve el valor del primer elemento que cumple la funcion
        const result = nums.find( elem => elem > 4)
        

        expect(result).toBe(8)
    })

    it('select even numbers', () => {
        const num2 = new Fakay(3, 6, 4, 12, 9, 2, 1, 13, 3, 4)

        // find: devuelve el valor del primer elemento que cumple la funcion

        const result = num2.find( elem => elem % 2 === 0)
        expect(result).toBe(6)
    })
    
})

