describe('includes', function() {
    test('should return true', () => {

        const array = [1, 2, 3];
        const result = includes(array, 2)
        expect(result).toBe(true) 
    })

    test('should return false', () => {

        const pets = ['cat', 'dog', 'bat'];

        const result = includes(pets, 'at')
        expect(result).toBe(false)

    })
})

