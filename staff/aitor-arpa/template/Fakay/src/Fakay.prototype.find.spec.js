describe('Fakay.prototype.find', function() {

    it('should find elements bigger than..', function() {
        const nums = new Fakay (8, 3, 6, 4, 12, 9, 2, 1 , 13, 3, 4)
        let n = 4

        // find: devuelve el valor del primer elemento que cumple la funcion
        nums.find( function(elem){ // le enviamos el array y la funcion
            return elem > n        
        })
        expect(result).toBe(8)
    })

    it('should find even numbers', function() {
        const num2 = new Fakay (3, 6, 4, 12, 9, 2, 1, 13, 3, 4)

        // find: devuelve el valor del primer elemento que cumple la funcion
        num2.find(function(elem){ // le enviamos el array y la funcion
            return elem%2===0   
        })
        expect(result).toBe(6)
    })
    
})