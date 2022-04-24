describe('lastIndexOf', () => {
    test('return last position of existing', () => {
        const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'] 

        let index = lastIndexOf(animals, 'Dodo')
        expect(index).toBe(3)

        index = lastIndexOf(animals, 'Tiger')
        expect(index).toBe(1)
    })
})
