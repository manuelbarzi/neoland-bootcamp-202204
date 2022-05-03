describe('forEach', function() {
    test('should add 10 to each element', () => {
        const array = [1, 2, 3, 4, 5] 
    
        forEach(array, (value, index) => {
            const sum = value + 10
            const result = array[index] = sum

            expect(result).toBe(value +10)
            
        })
    })
    
    test('should return array to a string', () => {
        const fruits = ["orange","apple","cherry"];
    
        let word = ''

        forEach(fruits, function(fruits){
            word += fruits
        })
        expect(word).toBe('orangeapplecherry')
    })
})
