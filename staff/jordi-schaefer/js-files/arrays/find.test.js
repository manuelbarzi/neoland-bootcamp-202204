describe('find', function() {

    it('select elements bigger than..', function() {
        const nums = [8, 3, 6, 4, 12, 9, 2, 1 , 13, 3, 4]
        let n = 4

        // find: devuelve el valor del primer elemento que cumple la funcion
        const result = find(nums, function(elem){ // le enviamos el array y la funcion
            return elem > n        
        })
        expect(result).toBe(8)
    })

    it('select even numbers', function() {
        const num2 = [3, 6, 4, 12, 9, 2, 1, 13, 3, 4]

        // find: devuelve el valor del primer elemento que cumple la funcion
        const result = find(num2, function(elem){ // le enviamos el array y la funcion
            return elem%2===0   
        })
        expect(result).toBe(6)
    })
    
})