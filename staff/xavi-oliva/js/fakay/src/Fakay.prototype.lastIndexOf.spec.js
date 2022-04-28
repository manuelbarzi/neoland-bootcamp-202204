describe('Fakay.prototype.lastIndexOf', () => {
    it('returns last position of existing elements', () => {
        const animals = new Fakay ('Dodo', 'Tiger', 'Penguin', 'Dodo')

        let index = animals.lastIndexOf('Dodo')
        expect(index).toBe(3)

        index = animals.lastIndexOf('Tiger')
        expect(index).toBe(1)
    })

    it('gets last position of matching element starting from positive index', () => {
        const nums = new Fakay (1, 2, 3, 4, 1, 4, 4, 3, 2, 1)
            
        const index = nums.lastIndexOf(4, 3)
        expect(index).toBe(3)
    })

    it('gets last position of matching element starting from negative index', () => {
        const nums = new Fakay (1, 2, 3, 4, 1, 4, 4, 3, 2, 1)

        const index = nums.lastIndexOf(4, -5)
        expect(index).toBe(5)
    })
})