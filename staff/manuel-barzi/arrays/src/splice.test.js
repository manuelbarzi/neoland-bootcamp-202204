describe('splice', () => {
    test('inserts a Feb between Jan and March', () => {
        const months = ['Jan', 'March', 'April', 'June']

        const deletedElements = splice(months, 1, 0, 'Feb')

        const expectedMonths = ['Jan', 'Feb', 'March', 'April', 'June']

        const expectedDeletedElements = []

        expect(months).toEqual(expectedMonths)
        expect(deletedElements).toEqual(expectedDeletedElements)
    })

    test('replaces June by May', () => {
        const months = ['Jan', 'Feb', 'March', 'April', 'June']

        const deletedElements = splice(months, 4, 1, 'May')

        const expectedMonths = ["Jan", "Feb", "March", "April", "May"]

        const expectedDeletedElements = ['June']

        expect(months).toEqual(expectedMonths)
        expect(deletedElements).toEqual(expectedDeletedElements)
    })
})