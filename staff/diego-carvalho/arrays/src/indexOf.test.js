describe('lastIndexOf', () => {
    test('returns last position of existing elements', () => {
        const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo']

        let index = lastIndexOf(animals, 'Dodo')
        expect(index).toBe(3)

        index = lastIndexOf(animals, 'Tiger')
        expect(index).toBe(1)
    })

    test('gets last position of matching element starting from positive index', () => {
        const nums = [1, 2, 3, 4, 1, 4, 4, 3, 2, 1]
            
        const index = lastIndexOf(nums, 4, 3)
        expect(index).toBe(3)
    })

    test('gets last position of matching element starting from negative index', () => {
        const nums = [1, 2, 3, 4, 1, 4, 4, 3, 2, 1]

        const index = lastIndexOf(nums, 4, -5)
        expect(index).toBe(5)
    })
})