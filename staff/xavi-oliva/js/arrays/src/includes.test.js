describe('includes', function () {

    
    test('return true if the element is included', function() {
        
        const array = [1, 2, 3]

        expect(includes(array, 2)).toBe(true)

    })

    
    test('return false if it is not included', function() {
        
        const pets = ['cat', 'dog', 'bat']

        expect(includes(pets, 'at')).toBe(false)

    })

})